import {useState} from "react";
import {PAGES} from "../utils/constants";
import {MainLayout} from "../layouts/MainLayout";
import {CounterPage} from "../pages/CounterPage";
import {TodoListPage} from "../pages/TodoListPage";

const Screen = ({name, currentPage, component, debug = false}) => {
  const RenderComponent = component

  if(name !== currentPage) {
    return null;
  }

  return debug ? (
    <div style={{border: '1px solid', backgroundColor: '#ffd4a0'}}>
      <RenderComponent/>
    </div>
  ) : (
    <RenderComponent/>
  )
}

export const Router = () => {
  const [page, setPage] = useState(PAGES.COUNTER)

  return (
    <MainLayout onChangePage={setPage}>
      <Screen name={PAGES.COUNTER} currentPage={page} component={CounterPage} debug/>
      <Screen name={PAGES.TODO_LIST} currentPage={page} component={TodoListPage}/>
    </MainLayout>
  )
}
