const todoStyles = {borderRadius: 4, flexGrow: '1', padding: 6, display: 'flex'}

export const TodoItem = ({todo, index, toggleTodo, removeTodo}) => {
  const handleRemove = () => {
    removeTodo(index)
  }

  const handleCheckItem = () => {
    toggleTodo(index)
  }

  const isComplete = todo.complete

  return (
    <li style={{listStyle: "none", display: 'flex', alignItems: 'center', marginBottom: 8}}>
      <div style={{marginRight: 10}}>
        {index + 1}:
      </div>
      <div style={{...todoStyles, backgroundColor: isComplete ? '#6cd786' : '#96c1ff'}}>
        <div style={{marginRight: 6}}>
          <input type="checkbox" checked={isComplete} onChange={handleCheckItem}/>
        </div>
        <div style={{flexGrow: '1', textDecoration: isComplete ? 'line-through' : 'none'}}>{todo.text}</div>
        <button onClick={handleRemove}>
          Удалить
        </button>
      </div>
    </li>
  )
}
