const https = require("https")
const apiKey = "91ba46395fa5d6523ffe8eb8c2feee87";
const cache = require("./cache")


async function operation(query, follow = false) {
  return new Promise((resolve) => {
    https.get(`https://api.themoviedb.org/3${query}${follow ? "&" : "?"}api_key=${apiKey}`, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData["results"])
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  });
}

module.exports.search = async function(query) {
  return await operation(`/search/multi?query=${query}`, true)
}

module.exports.trending = async function () {
  var trending = await cache.getCache("trending");
  if (trending != null) {
    console.log("Trending got on cache");
    return trending;
  } else {
    trending = {
      data: null,
      video: null
    }
    trending.data = await operation("/trending/all/day");
    trending.video = (await operation(`/movie/${trending.data[0]["id"]}/videos`))
    console.log("Trending got online");
    await cache.saveCache("trending", trending)
    return trending;
  }
}