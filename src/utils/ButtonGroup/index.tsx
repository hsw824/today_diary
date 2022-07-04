import styles from './buttonGroup.module.scss'

interface Prop {
  text1: string
  text2: string
  onClick1: () => void
  onClick2: () => void
}
const ButtonGroup = ({ text1, text2, onClick1, onClick2 }: Prop) => {
  return (
    <div className={styles.editButton}>
      <button type='button' onClick={onClick1} className={styles.itemButton}>
        {text1}
      </button>
      <button type='button' onClick={onClick2} className={styles.itemButton}>
        {text2}
      </button>
    </div>
  )
}

export default ButtonGroup
