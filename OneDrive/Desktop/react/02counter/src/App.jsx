import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter = 15
    
   let [counter,setCounter] = useState(15)
  
  const addValue = () => {
   // counter = counter + 1
    if(counter < 20){
    setCounter(counter + 1);
    }else{
      console.log("Counter cannot go above 20");
    }
  }

  
  const removeValue = () => {
  //  counter = counter - 1
    if(counter > 0){
    setCounter(counter - 1);
  }else{
      console.log("counter cannot go below 0");
    }
  }


  return (
    <>
     <h1>CODE WITH VARSHA</h1>
     <h2>Counter value: {counter}</h2>

     <button 
     onClick={addValue}
     >Increase Value {counter}</button>
     <br />
     <button
     onClick={removeValue}>Decrease Value {counter}</button>
     <p>footer: {counter}</p>

    </>
  )
}

export default App
