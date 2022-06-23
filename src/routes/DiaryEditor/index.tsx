import { useState, ChangeEvent, useRef, FormEvent } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import Footer from 'routes/_shared/Footer'

import styles from './diaryEditor.module.scss'

const DiaryEditor = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [emotion, setEmotion] = useState('😆')

  const dataId = useRef(-1)

  const [editData, setEditData] = useLocalStorageState<any[]>('editData', {
    ssr: true,
    defaultValue: [],
  })

  const onCreate = () => {
    const createdDate = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: editData.length >= 1 ? (dataId.current = editData[editData.length - 1].id + 1) : (dataId.current += 1),
    }
    setEditData((prev) => [...prev, newItem])
  }

  const authorInput = useRef<HTMLInputElement>(null)
  const contentArea = useRef<HTMLTextAreaElement>(null)

  const handleAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.currentTarget.value)
  }
  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }
  const handleEmotion = (event: ChangeEvent<HTMLSelectElement>) => {
    setEmotion(event.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (author.length < 1) {
      authorInput.current?.focus()
    } else if (content.length < 5) {
      contentArea.current?.focus()
    } else {
      onCreate()
      setAuthor('')
      setContent('')
      setEmotion('😆')
    }
  }
  return (
    <div className={styles.editorContainer}>
      <h2>오늘의 일기를 적어보세요</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={authorInput}
            onChange={handleAuthor}
            value={author}
            type='text'
            placeholder='이름을 적어주세요.'
            maxLength={5}
          />
        </div>
        <div className={styles.content}>
          <p>오늘 있었던 일들을 간단하게 적어보세요.</p>
          <textarea maxLength={200} ref={contentArea} onChange={handleContent} value={content} />
        </div>
        <div className={styles.emotion}>
          <select onChange={handleEmotion} value={emotion}>
            <option value='😆'>😆</option>
            <option value='😃'>😃</option>
            <option value='🙂'>🙂</option>
            <option value='😞'>😞</option>
            <option value='😩'>😩</option>
          </select>
        </div>

        <button type='submit'>일기 저장하기</button>
      </form>
      <Footer />
    </div>
  )
}

export default DiaryEditor
