import '@/styles/globals.css';
import '@/styles/Home.module.css';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function changeCount(delta) {
    setCount(count + delta);
  }
  return (
    <>
    <Button direction='up' handleClick={() => changeCount(1)}/>
    <Button direction='down'handleClick={() => changeCount(-1)}/>
    <div >Count: {count}</div>
    </>
  )
}

function Button({direction, handleClick}) {
  return(
    <button className='counter_button' onClick={handleClick}>{direction}</button>
  )
}
