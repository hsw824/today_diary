import { useLayoutEffect, useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from 'routes/_shared/Footer'
import useLocalStorageState from 'use-local-storage-state'
import Modal from 'utils/Modal'
import goBackArrow from 'assets/svgs/goBack.svg'
import { Props } from 'types/diaryData'

import styles from './itemDetail.module.scss'

const ItemDetail = () => {
  const [editData, setEditData] = useLocalStorageState<Props[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isModify, setIsModify] = useState(false)
  const [detailData, setDetailData] = useState({
    title: '',
    emotion: '',
    date: '',
    content: '',
  })
  const [localContent, setLocalContent] = useState('')

  const { id }: any = useParams()

  const navigate = useNavigate()
  useLayoutEffect(() => {
    const { title, emotion, createdDate, content } = editData[id]

    const date = new Date(createdDate).toLocaleString()
    setDetailData({
      title,
      emotion,
      date,
      content,
    })
    setLocalContent(content)
  }, [editData, id])
  const modalOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleDelete = () => {
    const onDelete = (targetId: number) => {
      const newDiaryList = editData.filter((item) => item.id !== targetId)

      setEditData(() => [...newDiaryList])
    }
    onDelete(editData[id].id)
    navigate('/list', { replace: true })
  }

  const toggleModify = () => {
    setIsModify((prev) => !prev)
  }

  const goBack = () => {
    navigate(-1)
  }

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLocalContent(event.currentTarget.value)
  }
  const handleQuitModify = () => {
    setIsModify((prev) => !prev)
    setLocalContent(detailData.content)
  }

  const onModify = (targetId: number, newContent: string) => {
    setEditData(editData.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)))
  }

  const handleModify = () => {
    onModify(editData[id].id, localContent)
    toggleModify()
  }
  return (
    <div className={styles.detailWrapper}>
      <button type='button' onClick={goBack} className={styles.goBack}>
        <img src={goBackArrow} alt='뒤로가기' />
      </button>
      <h2>일기를 읽어보세요</h2>
      <div className={styles.detailBody}>
        <div className={styles.detailItems}>
          <p className={styles.title}>제목 : {detailData.title}</p>
          <p className={styles.emotion}>감정점수 : {detailData.emotion}</p>
          <p className={styles.date}>작성 시간 : {detailData.date}</p>
          {isModify ? (
            <textarea value={localContent} onChange={handleOnChange} />
          ) : (
            <p className={styles.content}>일기 내용 : {detailData.content}</p>
          )}
        </div>

        <div>
          {isModify ? (
            <div className={styles.editButton}>
              <button type='button' onClick={handleModify} className={styles.itemButton}>
                수정 완료
              </button>
              <button type='button' onClick={handleQuitModify} className={styles.itemButton}>
                수정 취소
              </button>
            </div>
          ) : (
            <div className={styles.editButton}>
              <button type='button' onClick={modalOpen} className={styles.itemButton}>
                삭제하기
              </button>
              <button type='button' onClick={toggleModify} className={styles.itemButton}>
                수정하기
              </button>
            </div>
          )}
        </div>

        {isOpen ? (
          <Modal title='일기를 삭제합니다.' content='확인' handleDelete={handleDelete} handleCancle={modalOpen} />
        ) : null}
      </div>

      <Footer />
    </div>
  )
}

export default ItemDetail
