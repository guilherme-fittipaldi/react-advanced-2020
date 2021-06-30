import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() =>{setValue((prevState)=>{return prevState +1})}, 2000)
  }
  return <>
    <section style={{margin: '4rem 0'}}>
      <h2>contante</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value -1)}>Diminuto</button>
      <button className='btn' onClick={() => setValue(0)}>reseta muito</button>
      <button className='btn' onClick={() => setValue(value +1)}>Maximuto</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h2>conta demais</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={(complexIncrease)}>depois só</button>
    </section>
    
  </>
};

export default UseStateCounter;
