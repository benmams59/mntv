import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import sharedStyles from '../styles/utils.module.css'
import { useState } from 'react/cjs/react.development';
import { useRouter } from 'next/router';

export default function Header() {
  const [value, setValue] = useState('')
  const router = useRouter();

  const onSearch = () => {
    router.push(`/search?q=${value}`)
  }

  return (
    <div className={styles.header}>
      <div className='auto_container_header'>
        <div className={styles.flexbox}>
          <div className={styles.title_container}>
            <h3>MN<span>TV</span></h3>
          </div>
          <ul className={[styles.flexbox, styles.flexbox_menu].join(" ")}>
            <li>
              <Link href="/"><a className={styles.link}>Home</a></Link>
              <Link href="/movies"><a className={styles.link}>Movies</a></Link>
              <Link href="/tv_shows"><a className={styles.link}>TV Shows</a></Link>
            </li>
          </ul>
          <div className={styles.search_container}>
            <div className={styles.search_container_field}>
              <input type="search" autoComplete="false" placeholder="What are you looking?" onChange={e => {setValue(e.currentTarget.value)}} />
            </div>
            <button className={sharedStyles.button_icon} onClick={onSearch}>
              <FontAwesomeIcon className={sharedStyles.icon} icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}