import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="item-container">
      <p className="task">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
