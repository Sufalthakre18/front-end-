import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>coustom App !</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to google babe'
// }

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUSer="Chai aur code"
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to google babe',
  anotherUSer
)

createRoot(document.getElementById('root')).render(

    reactElement
  
)
