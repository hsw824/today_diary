import styles from './diaryList.module.scss'
import DiaryItem from './DiaryItem'
import useLocalStorageState from 'use-local-storage-state'
import Footer from 'routes/_shared/Footer'

const DiaryList = () => {
  const [editData] = useLocalStorageState<any[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  return (
    <div className={styles.listContainer}>
      <h2> 일기 리스트</h2>
      <h4>{editData.length}개의 일기가 있습니다.</h4>
      <div className={styles.itemContainer}>
        {editData.map((item: any) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default DiaryList
