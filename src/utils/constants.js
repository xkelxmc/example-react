export const PAGES = {
  COUNTER: 'counter',
  TODO_LIST: 'todoList',
  // EXAMPLE: 'example',
}

const ManuTitles = {
  [PAGES.COUNTER]: 'Go to Counter',
  [PAGES.TODO_LIST]: 'Go to TodoList',
  // [PAGES.EXAMPLE]: 'Example',
}

export const menu = Object.keys(PAGES).map((key) => {
  const value = PAGES[key]
  const title = ManuTitles[value]
  return { title, id: value, }
})
