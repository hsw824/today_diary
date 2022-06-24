import ReactDOM from 'react-dom'
import { MouseEvent } from 'react'

import styles from './modal.module.scss'

interface Prop {
  title: string
  content: string
  handleDelete?: (event: MouseEvent<HTMLButtonElement>) => void
  handleCancle: (event: MouseEvent<HTMLButtonElement>) => void
}
const Modal = ({ title, content, handleDelete, handleCancle }: Prop) => {
  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBody}>
        <h2>{title}</h2>
        <div className={styles.buttonContainer}>
          <button type='button' onClick={handleDelete}>
            {content}
          </button>
          <button type='button' onClick={handleCancle}>
            취소
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}

export default Modal
