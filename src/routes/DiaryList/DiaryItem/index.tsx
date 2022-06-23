import { Link } from 'react-router-dom'
import { Props } from 'types/diaryData'

import styles from './diaryItem.module.scss'

const DiaryItem = ({ title, content, emotion, id }: Props) => {
  return (
    <Link to={`/item/${id}`}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemBody}>
          <p className={styles.itemAuthor}>제목 : {title}</p>
          <p className={styles.itemEmotion}>감정점수 : {emotion}</p>
          <p className={styles.itemContent}>{content}</p>
        </div>
      </div>
    </Link>
  )
}

export default DiaryItem
