import DiaryItem from './DiaryItem'
import useLocalStorageState from 'use-local-storage-state'
import Footer from 'routes/_shared/Footer'
import { useState, ChangeEvent } from 'react'
import { Props } from 'types/diaryData'

import styles from './diaryList.module.scss'

const DiaryList = () => {
  const [editData] = useLocalStorageState<Props[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  return (
    <div className={styles.listContainer}>
      <h2> 일기 리스트</h2>
      <div className={styles.itemContainer}>
        <input type='text' value={value} onChange={onChange} placeholder='일기 내용을 검색하세요' />
        <h4>{editData.length}개의 일기가 있습니다.</h4>
        {editData
          .filter((val) => {
            if (value === '') {
              return val
            }
            if (val.content.includes(value)) {
              return val
            }
            return false
          })
          .map((item: Props, index) => (
            <DiaryItem key={item.id} {...item} index={index} />
          ))}
      </div>
      <Footer />
    </div>
  )
}

export default DiaryList
