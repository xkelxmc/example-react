export const CounterControls = ({setCount, intValue}) => {

  const addClick = () => {
    setCount((previousCount) => previousCount + 1)
  }
  const downClick = () => {
    setCount((previousCount) => previousCount - 1)
  }
  const upToFive = () => {
    setCount((previousCount) => previousCount + 5)
  }
  const setDefault = () => {
    setCount(intValue)
  }

  return (
    <>
      <button onClick={addClick}>Count + 1</button>
      <button onClick={downClick}>Count - 1</button>
      <button onClick={upToFive}>Count + 5</button>
      <button onClick={setDefault}>Default</button>
    </>
  )
}
