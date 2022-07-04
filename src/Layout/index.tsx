import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import styles from './layout.module.scss'

const DefaultLayout = () => {
  return (
    <div className={styles.contentsWrapper}>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
