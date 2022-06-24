import { NavLink } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <ul className={styles.menuContainer}>
      <NavLink to='/'>일기 쓰기</NavLink>
      <NavLink to='/list'>일기 보기</NavLink>
    </ul>
  )
}

export default Footer
