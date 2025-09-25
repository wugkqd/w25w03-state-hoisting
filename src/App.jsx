import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <Counter
        count={count1}
        onIncrement={
          () => setCount1(prev => prev + 1)
        }/>
      <Counter
        count={count2}
        onIncrement={
          () => setCount2(prev => prev + 1)
       }/>
      {/* <Counter/> */}
    </div>
  )
}

function Counter({count, onIncrement}) {

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={onIncrement}>
          증가
      </button>
    </div>
  )
}

export default App