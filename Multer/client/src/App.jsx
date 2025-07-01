import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fileupload from './Fileupload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fileupload />
      <hr />
    </>
  )
}

export default App
