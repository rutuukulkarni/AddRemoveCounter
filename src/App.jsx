import { useState } from 'react'

import './App.css'

function App() {
//let counter = 20

const [counter, setCounter] = useState(1)
const addValue = () =>{
 setCounter(counter + 1)
}
const removeValue = () =>{
  setCounter(counter - 1)
}

  return (
    <>
      <h1>All about React {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}>Add val</button>{" "}
      <button
      onClick={removeValue}>Remove val</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App
