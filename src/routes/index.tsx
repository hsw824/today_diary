import { Route, Routes } from 'react-router-dom'

import DefaultLayout from 'Layout'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import ItemDetail from './DiaryList/DiaryItem/ItemDetail'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<DiaryEditor />} />
          <Route path='list' element={<DiaryList />} />
          <Route path='/item/:id' element={<ItemDetail />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
