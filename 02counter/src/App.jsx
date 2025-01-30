import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter  = 15; 

  const addValue = () =>{
 
    if(counter<20){
      counter+=1
      setCounter(counter)
      console.log("Clicked",counter)
    }
  
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }


  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/><br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
