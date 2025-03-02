// import { useState } from 'react'
import './App.css'
import FormData from './component/FormData/FormData';
import DaisyNav from './component/DaisyNav/DaisyNav';
import NavBar from './component/NavBar/NavBar';
import PriceOptions from './component/PriceOptions/PriceOptions';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      {/* <FormData></FormData> */}
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
