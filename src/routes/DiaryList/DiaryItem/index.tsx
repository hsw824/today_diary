import useLocalStorageState from 'use-local-storage-state'

interface Props {
  author: string
  content: string
  createdDate: string
  emotion: string
  id: number
}

const DiaryItem = ({ author, content, createdDate, emotion, id }: Props) => {
  const [editData, setEditData] = useLocalStorageState<any[]>('editData', {
    ssr: true,
    defaultValue: [],
  })
  const date = new Date(createdDate).toLocaleString()

  const handleDelete = () => {
    const onDelete = (targetId: number) => {
      const newDiaryList = editData.filter((item: any) => item.id !== targetId)
      setEditData(() => [...newDiaryList])
    }
    onDelete(id)
  }

  return (
    <div>
      <div>
        <p>작성자 : {author}</p>
        <p>감정점수 : {emotion}</p>
        <p>작성시간 : {date}</p>
        <p>{content}</p>
        <button type='button' onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </div>
  )
}

export default DiaryItem
