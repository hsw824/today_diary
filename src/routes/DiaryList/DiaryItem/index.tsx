import styles from './diaryItem.module.scss'
import useLocalStorageState from 'use-local-storage-state'

interface Props {
  author: string
  content: string
  createdDate: string
  emotion: string
  id: number
}

const DiaryItem = ({ author, content, createdDate, emotion, id }: Props) => {
  const [editData, setEditData] = useLocalStorageState<any[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  const date = new Date(createdDate).toLocaleString()

  const handleDelete = () => {
    const onDelete = (targetId: number) => {
      const newDiaryList = editData.filter((item: any) => item.id !== targetId)
      setEditData(() => [...newDiaryList])
    }
    onDelete(id)
  }

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemBody}>
        <div className={styles.itemSubject}>
          <p className={styles.itemAuthor}>작성자 : {author}</p>
          <p className={styles.itemEmotion}>감정점수 : {emotion}</p>
        </div>
        <p className={styles.itemDate}>작성시간 : {date}</p>
        <p className={styles.itemContent}>{content}</p>
        <button className={styles.itemButton} type='button' onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </div>
  )
}

export default DiaryItem
