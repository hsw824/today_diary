import { NavLink } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.menuWrapper}>
      <ul className={styles.menuContainer}>
        <li>
          <NavLink to='/'>일기 쓰기</NavLink>
        </li>
        <li>
          <NavLink to='/list'>일기 보기</NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
