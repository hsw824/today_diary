import DiaryItem from './DiaryItem'
import { useState, ChangeEvent } from 'react'
import { Props } from 'types/diaryData'
import useLocalStorageState from 'use-local-storage-state'

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
          .filter((val) => !!val.content.includes(value))
          .map((item: Props, index) => (
            <DiaryItem key={item.id} {...item} index={index} />
          ))}
      </div>
    </div>
  )
}

export default DiaryList
