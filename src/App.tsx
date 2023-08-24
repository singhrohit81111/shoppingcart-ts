import { useState } from 'react'
import './App.css';
import Home from "./Components/HomeComp/Home";
import Routtes from './Routtes';

function App() {
  const [count, setCount] = useState(0)
  let str: string = "Hello Rohit";
  let arr: (string | number)[] = ["R", "Hello"];
  console.log(arr);

  return (
    <>
      <Routtes />
    </>
  )
}

export default App
