import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import styles from './section.module.css'
import Card from './card'

function Empty() {
  return (
    <div className={styles.empty_container}>
      <div className={styles.empty_container_contents}>
        <div><FontAwesomeIcon className={styles.empty_text} icon={faWifi} size="5x"/></div>
        <h3 className={styles.empty_text}>Please check your internet!</h3>
      </div>
    </div>
  )
}

export default function Section({name, data}) {
  return (
    <div>
      <div className='auto_container_header'>
        <h1 className={styles.header}>{ name }</h1>
      </div>
      <div className={styles.container}>
        {data == null && <Empty />}
        <div className={styles.flex_container}>{data != null && data.map((movie) => <Card key={movie["id"]} movie={movie}/>)}</div>
      </div>
    </div>
  )
}