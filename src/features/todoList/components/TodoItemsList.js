import {TodoItem} from "./TodoItem";

function sortTodoByCompleted(todo1, todo2) {
  if(todo1.complete === todo2.complete) {
    if(todo1.date > todo2.date) {
      return -1;
    } else {
      return 1;
    }
  }
  //todo1 = false, todo2 = true
  if(!todo1.complete && todo2.complete) {
    return -1;
  }
  //todo1 = true, todo2 = false
  if(todo1.complete && !todo2.complete) {
    return 1;
  }
}

export const TodoItemsList = ({todos, removeTodo, toggleTodo}) => {

  const sortedTodos = todos.sort(sortTodoByCompleted)

  return (
    <div>
      <h4>Список задач:</h4>
      <ul style={{paddingLeft: 0}}>
        {sortedTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
  )
}
