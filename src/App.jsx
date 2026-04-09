import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FunFactCard from './FunFactCard';
import NameHeader from './Header';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <NameHeader />
        <FunFactCard fact="I have visited more than 10 countries." />
        <FunFactCard fact="I own a parkeet." />
        <FunFactCard fact="I am legally allowed to drive a crane." />
        <FunFactCard fact="I am wanted in the state of Hawaii for crimes against Pineapples." />
        <FunFactCard fact="I can play the vuvuzela." />
      </div>
  )
}

export default App
