import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styles from './card.module.css'

export default function Card({ movie }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_relative}>
        <div className={styles.poster_container}>
          <Image layout="fill" objectFit="cover" src={`https://image.tmdb.org/t/p/w500${movie["poster_path"]}`} />
        </div>
        <div className={styles.details}>
          <div>
            <div></div>
            <div>
              <FontAwesomeIcon icon={faPlayCircle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}