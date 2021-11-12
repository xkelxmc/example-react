import {useState} from "react";

const formStyles = {display: 'flex', alignItems: 'center', marginBottom: 10};

export const TodoListForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleAdd = () => {
    if(value.length >= 3) {
      addTodo(value)
      setValue('')
    } else {
      alert('Значение меньше 3х символов')
    }
  }

  return (
    <div style={formStyles}>
      <input value={value} onChange={handleChange} style={{flexGrow: '1', marginRight: 10}} placeholder={'Введите задачу'}/>
      <button onClick={handleAdd}>Добавить</button>
    </div>
  )
}
