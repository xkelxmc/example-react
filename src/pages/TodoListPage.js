import {Header} from "../components/Header";
import {TodoList} from "../features/todoList/TodoList";

export const TodoListPage = () => {
  return (
    <div>
      <Header title={'Todo'}/>
      <div>
        <TodoList/>
      </div>
    </div>
  )
}
