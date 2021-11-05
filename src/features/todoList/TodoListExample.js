import {TodoListForm} from "./components/TodoListForm";
import {TodoItemsList} from "./components/TodoItemsList";
import {useState} from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState(['todo1', 'todo2'])

  const addTodo = (newTodo) => {
    /** Example 1: not good */
    // setTodos((prev) => {
    //   const newTodoList = []
    //   prev.forEach(todo => {
    //     newTodoList.push(todo)
    //   })
    //   newTodoList.push(newTodo)
    //
    //   return newTodoList
    // })

    /** Example 2: perfect!!! */
    setTodos((prev) => [...prev, newTodo])
  }

  const removeTodo = (index) => {
    /** Example 1: not good */
    // setTodos((prev) => {
    //   const newTodoList = [];
    //   for(let i = 0; i <= prev.length; i++) {
    //     const value = prev[i]
    //     if(i !== index) {
    //       newTodoList.push(value)
    //     }
    //   }
    //
    //   return newTodoList
    // })

    /** Example 2: not good */
    // setTodos((prev) => {
    //   const newTodoList = [];
    //   prev.forEach((value, i) => {
    //     if(i !== index) {
    //       newTodoList.push(value)
    //     }
    //   })
    //
    //   return newTodoList
    // })

    /** Example 3: perfect!!! */
    setTodos(prev => prev.filter((_, i) => index !== i))
  }

  const completeTodo = () => {
    //
  }

  return (
    <div>
      <TodoListForm addTodo={addTodo} />
      <TodoItemsList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  )
}
