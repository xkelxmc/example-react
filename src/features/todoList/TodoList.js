import {TodoListForm} from "./components/TodoListForm";
import {TodoItemsList} from "./components/TodoItemsList";
import {useState} from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState(
    [
      {text: "todo 1", complete: false},
      {text: "todo 2", complete: true},
    ]
  )

  const addTodo = (text) => {
    const newTodo = {text: text, complete: false}

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

  const toggleTodo = (index) => {
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
    setTodos(prev => prev.map((value, i) => ({
      ...value,
      complete: index === i ? !value.complete : value.complete
    })))
  }

  return (
    <div style={{width: 500}}>
      <TodoListForm addTodo={addTodo}/>
      <TodoItemsList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}
