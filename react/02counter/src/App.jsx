import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let Counter=15

  const [Counter,setCouter]=useState(15)


  const addValue=()=>{
    
    if(Counter>=20){
      return
    }
    setCouter(Counter+1)

  }

  const removeValue=()=>{
     if (Counter<=0) {
      return
      
     }
    setCouter(Counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {Counter}</h2>
      <br />
      <button onClick={addValue}>Add value {Counter}</button>
      <button onClick={removeValue}>Remove value {Counter}</button>
      <p>footer :{Counter}</p>
    </>
  )
}

export default App
