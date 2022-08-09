const fs = require('fs')

/**
 * 
 * @param {string} name 
 */
module.exports.getCache = function(name) {
  if (fs.existsSync(`${__dirname}/.cache/${name}.json`)) {
    var trending = JSON.parse(fs.readFileSync(`${__dirname}/.cache/${name}.json`, "utf-8"))
      var date = new Date(Date.now())
      var enconded = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`
      if (trending["date"] == enconded) {
        return trending["data"]
      } else
        return null
  } else {
    return null
  }
}

module.exports.saveCache = async function(name, data) {
  var date = new Date(Date.now())
  var finalData = {
    date: `${date.getFullYear()}${date.getMonth()}${date.getDay()}`,
    data: data
  }
  fs.writeFileSync(`${__dirname}/.cache/${name}.json`, JSON.stringify(finalData), "utf-8")
}