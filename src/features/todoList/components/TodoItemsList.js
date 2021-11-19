import {TodoItem} from "./TodoItem";
import {useMemo, useState} from "react";

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
  const [state, setState] = useState(0);

  const sortedTodos = useMemo(() => {
    let a = 0;
    for(let i = 0; i < 1000000000; i++) {
      a += i;
    }
    console.log(a)
    return todos.sort(sortTodoByCompleted)
  }, [todos])

  return (
    <div>
      <h4>Список задач:</h4>
      <button onClick={() => setState(p => p + 1)}>+</button>
      <button onClick={() => setState(p => p - 1)}>-</button>
      {state}
      <ul style={{paddingLeft: 0}}>
        {sortedTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
  )
}
