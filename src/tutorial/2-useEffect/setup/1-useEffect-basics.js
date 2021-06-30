import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if(value> 0) document.title = `(${value}) gatinhas te chamô`
  }, [value])

  useEffect(() =>alert('ai'), [])
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=> setValue(value+1)}>Aumenta</button>
  </>;
};

export default UseEffectBasics;
