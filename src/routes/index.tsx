import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import styles from './routes.module.scss'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<DiaryEditor />} />
          <Route path='list' element={<DiaryList />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
