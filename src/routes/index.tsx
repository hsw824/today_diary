import { Route, Routes } from 'react-router-dom'

import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import ItemDetail from './DiaryList/DiaryItem/ItemDetail'
import DiaryResult from './DiaryResult'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<DiaryEditor />} />
          <Route path='list' element={<DiaryList />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/result' element={<DiaryResult />} />

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
