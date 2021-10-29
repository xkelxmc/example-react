import {useState, useEffect} from "react";
import {CounterControls} from "./CounterControls";
import {CounterValue} from "./CounterValue";


const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, []);
}

const useUnMount = (callback) => {
  useEffect(() => {
    return () => {
      callback()
    }
  }, []);
}

const useAddMouseListener = (count) => {
  useEffect(() => {
    const mouseMove = (e) => {
      console.log(count, e.clientX, e.clientY)
    }
    document.addEventListener('mousemove', mouseMove);
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [count]);
}

export const Counter = ({intValue = 0}) => {
  const [count, setCount] = useState(intValue);
  const [value, setValue] = useState(0);

  useAddMouseListener(count)

  useMount(() => {
    console.log('Mount custom')
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // setValue(100)
  })

  useUnMount(() => {
    console.log('UnMount custom')
  })

  useEffect(function () {
    console.log('Mount')

    return () => {
      console.log('Unmount')
    }
  }, []);

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     console.log(count, e.clientX, e.clientY)
  //   }
  //   document.addEventListener('mousemove', mouseMove);
  //   return () => {
  //     document.removeEventListener('mousemove', mouseMove)
  //   }
  // }, [count]);


  // useEffect(() => {
  //   console.log('intValue', intValue)
  //   setCount(intValue)
  //   return () => {
  //     console.log('intValue return', intValue)
  //   }
  // }, [intValue]);
  //
  // useEffect(() => {
  //   console.log('useEffect count: ', count)
  //   if(count % 2 === 0) {
  //     console.log('Кратно двум!')
  //   }
  //   return () => {
  //     console.log('useEffect count return', count)
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log({count, value})
  // }, [count, value])


  // if(count > 10) {
  //   console.log('Счетчик больше 10', {count, value})
  // }
  console.log('Rerender')

  return (
    <>
      <CounterControls setCount={setCount} intValue={intValue}/>
      <CounterValue count={count}/>
      <div>
        Второй счетчик
      </div>
      <CounterControls setCount={setValue} intValue={0}/>
      <CounterValue count={value}/>
    </>
  )
}
