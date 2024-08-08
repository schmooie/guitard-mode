import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fret from './components/Fret'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fret />
  )
}

export default App
