// import { useState } from 'react'
import './App.css'
import FormData from './component/FormData/FormData';
import DaisyNav from './component/DaisyNav/DaisyNav';
// import NavBar from './component/NavBar/NavBar';
import PriceOptions from './component/PriceOptions/PriceOptions';
// import { LineChart } from 'recharts';
import LineChart from './component/LineChart/LineChart';
import Phones from './component/Phones/Phones';
import NavVar from './component/NavVar/NavVar';
import NavBar3 from './component/NavBar3/NavBar3';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      {/* <NavBar></NavBar> */}
      {/* <FormData></FormData> */}
      <NavVar></NavVar>
      {/* <NavBar3></NavBar3> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
