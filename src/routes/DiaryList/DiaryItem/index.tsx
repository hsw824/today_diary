import { Link } from 'react-router-dom'

import styles from './diaryItem.module.scss'

interface Props {
  author: string
  content: string
  emotion: string
  id: number
}

const DiaryItem = ({ author, content, emotion, id }: Props) => {
  return (
    <Link to={`/item/${id}`}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemBody}>
          <p className={styles.itemAuthor}>작성자 : {author}</p>
          <p className={styles.itemEmotion}>감정점수 : {emotion}</p>
          <p className={styles.itemContent}>{content}</p>
        </div>
      </div>
    </Link>
  )
}

export default DiaryItem
