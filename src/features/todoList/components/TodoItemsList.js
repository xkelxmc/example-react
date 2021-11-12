import {TodoItem} from "./TodoItem";

export const TodoItemsList = ({todos, removeTodo, toggleTodo}) => {
  return (
    <div>
      <h4>Список задач:</h4>
      <ul style={{paddingLeft: 0}}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
  )
}
