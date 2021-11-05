import {TodoItem} from "./TodoItem";

export const TodoItemsList = ({todos, removeTodo, toggleTodo}) => {
  return (
    <div>
      <div>TodoItemsList</div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index}/>
        ))}
      </ul>
    </div>
  )
}
