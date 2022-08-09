import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import styles from './presentation.module.css'

function Presentation({ movie}) {
  const data = movie["data"][0]
  const videos = movie["video"]
  const canPlay = false
  let videoKey

  if (videos != {}) {
    for (var video of videos) {
      if (video["type"] == "Clip") {
        videoKey = video["key"]
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_poster}>
        {
          videoKey != null ?
          <div className={styles.video_wrapper}><iframe width={560} height={349} className={styles.video_poster} src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&controls=0&disablekb=1&modestbranding=1`} allowFullScreen></iframe></div> :
          <Image layout="fill" objectFit="cover" src={`https://image.tmdb.org/t/p/w500${data["poster_path"]}`} />
        }
      </div>
      <div className={styles.details_container}>
        <div className={styles.details_container_bottom}>
          <div className="auto_container_header">
            <div>
              <h3 className={styles.text}>{data["title"]}</h3>
              <p className={[styles.text, styles.overview].join(" ")}>{data["overview"]}</p>
              <button className={styles.button}><FontAwesomeIcon icon={faPlay} size="lg" color='#fff' /> Watch {data["title"]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation