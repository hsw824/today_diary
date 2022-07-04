import { Link } from 'react-router-dom'
import { Props } from 'types/diaryData'

import styles from './diaryItem.module.scss'

const DiaryItem = ({ title, content, index, createdDate }: Props) => {
  const year = new Date(createdDate).getFullYear()
  const month = new Date(createdDate).getMonth() + 1
  const day = new Date(createdDate).getDate()

  return (
    <Link to={`/item/${index}`}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemBody}>
          <p className={styles.itemAuthor}>제목 : {title}</p>
          <p>
            작성일 : {year}년 {month}월 {day}일
          </p>
          <p className={styles.itemContent}>내용 : {content}</p>
        </div>
      </div>
    </Link>
  )
}

export default DiaryItem
