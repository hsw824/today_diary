import styles from './diaryList.module.scss'
import DiaryItem from './DiaryItem'
import useLocalStorageState from 'use-local-storage-state'
import Footer from 'routes/_shared/Footer'
import { Props } from 'types/diaryData'

const DiaryList = () => {
  const [editData] = useLocalStorageState<Props[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  return (
    <div className={styles.listContainer}>
      <h2> 일기 리스트</h2>
      <div className={styles.itemContainer}>
        <h4>{editData.length}개의 일기가 있습니다.</h4>

        {editData.map((item: Props) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default DiaryList
