import Card from './card';
import styles from './search_container.module.css'

export default function SearchContainer({ query, data }) {
  const orderedData = data.length > 0 ? {
    movies: [],
    tvs: [],
    peoples: []
  } : null
  const bestResults = data.slice(0, data.length >= 5 ? 5 : data.length)
  var restOfData = data.slice(bestResults.length, data.length)
  if (orderedData != null) {
    for (var d of restOfData) {
      switch(d["media_type"]) {
        case "movie": orderedData.movies.push(d);
        break;
        case "tv": orderedData.tvs.push(d);
        break;
        case "people": orderedData.peoples.push(d);
        break;
      }
    }
  }
  console.log(bestResults)
  return (
    <div>
      <div className="auto_container_header">
        <h1 className={styles.header}>Looking for { query }</h1>
      </div>
      <div>
        {orderedData != null &&
        <div>
          {bestResults.length > 0 &&
          <div>
            <div className="auto_container_header"><h3 className={styles.header}>Best results</h3></div>
            <div className={styles.flex_box}>
              {bestResults.map((movie) => <Card movie={movie} />)}
            </div>
          </div>
          }
          {orderedData.movies.length > 0 &&
          <div>
            <div className="auto_container_header"><h3 className={styles.header}>Movies</h3></div>
            <div className={styles.flex_box}>
              {orderedData.movies.map((movie) => <Card movie={movie} />)}
            </div>
          </div>
          }
          {orderedData.tvs.length > 0 &&
          <div>
            <div className="auto_container_header"><h3 className={styles.header}>Tv Shows</h3></div>
            <div className={styles.flex_box}>
              {orderedData.tvs.map((tv) => <Card movie={tv} />)}
            </div>
          </div>
          }
          {orderedData.peoples.length > 0 &&
          <div>
            <div className="auto_container_header"><h3 className={styles.header}>People</h3></div>
          </div>
          }  
        </div>}
      </div>
    </div>
  )
}