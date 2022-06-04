import styles from './diaryEditor.module.scss'
import { useState, ChangeEvent, MouseEvent } from 'react'

const DiaryEditor = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [emotion, setEmotion] = useState('')

  const handleAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.currentTarget.value)
  }
  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }
  const handleEmotion = (event: ChangeEvent<HTMLSelectElement>) => {
    setEmotion(event.currentTarget.value)
  }
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(author, content, emotion)
  }
  return (
    <div className={styles.editorContainer}>
      <h2>오늘의 일기를 적어보세요</h2>
      <form>
        <div>
          <input onChange={handleAuthor} value={author} type='text' placeholder='이름을 적어주세요' />
        </div>
        <div>
          <textarea onChange={handleContent} value={content} />
        </div>
        <div>
          <select onChange={handleEmotion} value={emotion}>
            <option value={1}>😆</option>
            <option value={2}>😃</option>
            <option value={3}>🙂</option>
            <option value={4}>😞</option>
            <option value={5}>😩</option>
          </select>
        </div>

        <button onClick={handleSubmit} type='submit'>
          일기 저장하기
        </button>
      </form>
    </div>
  )
}

export default DiaryEditor
