import Modal from 'utils/Modal'
import ButtonGroup from 'utils/ButtonGroup'
import { useLayoutEffect, useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Props } from 'types/diaryData'
import useLocalStorageState from 'use-local-storage-state'
import goBackArrow from 'assets/svgs/goBack.svg'

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

  const { id } = useParams() as { id: string }

  const navigate = useNavigate()
  useLayoutEffect(() => {
    const { title, emotion, createdDate, content } = editData[Number(id)]

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
    onDelete(editData[Number(id)].id)
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
    onModify(editData[Number(id)].id, localContent)
    toggleModify()
  }
  return (
    <div className={styles.detailWrapper}>
      <button type='button' onClick={goBack} className={styles.goBack}>
        <img src={goBackArrow} alt='????????????' />
      </button>
      <h2>????????? ???????????????</h2>
      <div className={styles.detailBody}>
        <div className={styles.detailItems}>
          <p className={styles.title}>?????? : {detailData.title}</p>
          <p className={styles.emotion}>???????????? : {detailData.emotion}</p>
          <p className={styles.date}>?????? ?????? : {detailData.date}</p>
          {isModify ? (
            <textarea value={localContent} onChange={handleOnChange} />
          ) : (
            <p className={styles.content}>?????? ?????? : {detailData.content}</p>
          )}
        </div>

        <div>
          {isModify ? (
            <ButtonGroup text1='?????? ??????' text2='?????? ??????' onClick1={handleModify} onClick2={handleQuitModify} />
          ) : (
            <ButtonGroup text1='????????????' text2='????????????' onClick1={modalOpen} onClick2={toggleModify} />
          )}
        </div>

        {isOpen && (
          <Modal title='????????? ???????????????.' content='??????' handleDelete={handleDelete} handleCancel={modalOpen} />
        )}
      </div>
    </div>
  )
}

export default ItemDetail
