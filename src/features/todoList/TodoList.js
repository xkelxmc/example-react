import {TodoListForm} from "./components/TodoListForm";
import {TodoItemsList} from "./components/TodoItemsList";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoList = () => {
  const [todos, setTodos] = useState(
    [
      {text: "todo 1", complete: false, id: uuidv4(), date: new Date()},
      {text: "todo 2", complete: true, id: uuidv4(), date: new Date()},
    ]
  )

  const addTodo = (text) => {
    const newTodo = {text: text, complete: false, id: uuidv4(), date: new Date()}

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

  const removeTodo = (id) => {
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
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    /** Example 1: not good */
    // setTodos((prev) => {
    //   const newTodoList = [];
    //   prev.forEach((value, i) => {
    //     if (index === i) {
    //       value.complete = !value.complete;
    //     }
    //     newTodoList.push(value)
    //   })
    //
    //   return newTodoList
    // })

    /** Example 2: perfect!!! */
    //https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/simplify-map-reduce-and-filter-in-typescript/Images/map_filter_reduce.png
    setTodos(prev => prev.map((todo) => ({
      ...todo,
      complete: todo.id === id ? !todo.complete : todo.complete
    })))
  }

  return (
    <div style={{width: 500}}>
      <TodoListForm addTodo={addTodo}/>
      <TodoItemsList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}
