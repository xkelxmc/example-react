import {TodoListForm} from "./components/TodoListForm";
import {TodoItemsList} from "./components/TodoItemsList";
import {useEffect, useReducer} from "react";
import {v4 as uuidv4} from "uuid";

const ActionTypes = {
  LOAD_DATA: 'loadData'
}

function todoReducer(state, action) {
  // console.log("todoReducer", state, action)
  const newState = {
    ...state,
  }

  const todoActions = {
    [ActionTypes.LOAD_DATA]: () => {
      newState.isLoading = true;
    },
    loadingComplete: () => {
      newState.isLoading = false;
      newState.list = action.payload;
    },
    addTodo: () => {
      const newTodo = {
        text: action.payload,
        complete: false,
        id: uuidv4(),
        date: new Date()
      }
      newState.list = [...newState.list, newTodo];
    },
    removeTodo: () => {
      newState.list = state.list.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: () => {
      newState.list = state.list.map((todo) => ({
        ...todo,
        complete: todo.id === action.payload ? !todo.complete : todo.complete
      }))
    },
  }

  if (todoActions[action.type]) {
    todoActions[action.type]()
    return newState
  }

  return state
}

const serverData = [
  {text: "todo 1", complete: false, id: uuidv4(), date: new Date()},
  {text: "todo 2", complete: true, id: uuidv4(), date: new Date()},
]

const initialValue = {
  list: [],
  isLoading: false,
  user: "userName"
}

export const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialValue)

  useEffect(() => {
    dispatch({type: ActionTypes.LOAD_DATA})
    setTimeout(() => {
      dispatch({type: "loadingComplete", payload: serverData})
    }, 3000)
  }, []);


  const addTodo = (text) => {
    dispatch({type: "addTodo", payload: text})
  }

  const removeTodo = (id) => {
    dispatch({type: "removeTodo", payload: id})
  }

  const toggleTodo = (id) => {
    dispatch({type: "toggleTodo", payload: id})
  }

  if (state.isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div style={{width: 500}}>
      <TodoListForm addTodo={addTodo}/>
      <TodoItemsList todos={state.list} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}
