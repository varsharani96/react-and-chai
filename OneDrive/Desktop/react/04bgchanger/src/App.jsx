import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className ="w-full h-screen duration-200"
    style={{background:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"green"}}
          >green</button>
          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"purple"}}
          >Purple</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"magenta"}}
          >Magenta</button>
          <button           
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"brown"}}
          >Brown</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"pink"}}
          >Pink</button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"grey"}}
          >Grey</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"orange"}}
          >Orange</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"olive"}}
          >Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
