import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const user={
    country:'India',
    moto:'Jai Rajputana',
    url:'https://assets.hongkiat.com/uploads/beautiful-india-photography/the-red-fort-new-delhi.jpg'
  }
  const user1={
    country:'Rajasthan',
    moto:'jai haryana',
    url:'https://wallpapercave.com/wp/wp8639318.jpg'
  }

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-2xl font-serif'>Jai Rajputana</h1>
      
      <Card user={user}/>
      <Card user={user1}/>

    </>
  )
}

export default App
