import { useState } from 'react'

import './App.css'
import Navabr from './components/Navabr'
import Signup from './pages/signup'
import Registration from './pages/registration'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navabr/>
    <Registration/>
   </div>
  )
}

export default App
