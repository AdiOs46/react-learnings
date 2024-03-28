import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) //setCounter is a method that will control 'counter'

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter+1);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai Aur React | Aditya</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
