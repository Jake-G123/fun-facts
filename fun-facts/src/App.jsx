import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FunFactCard from './FunFactCard';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <FunFactCard fact="I have visited more than 10 countries." />
      </div>
  )
}

export default App
