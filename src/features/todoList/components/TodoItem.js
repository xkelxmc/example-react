export const TodoItem = ({todo, index}) => {
  const remove = () => {
    console.log('remove')
  }

  return (
    <li>
      {index}: {todo.text}, {todo.complete ? 'checked' : 'not checked'}
      <button onClick={remove}>
        Remove
      </button>
    </li>
  )
}
