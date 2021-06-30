import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'peter', age:24, message:'keep up'})
  const changeMessage = () =>{
    setMessage('keep going')
  }

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Keep trying')
  return (
  <>
    <h3>{name}</h3>
    <h3>{message}</h3>
    <h3>{age}</h3>
    <button className="btn" onClick={changeMessage}>Muda Muda Muda</button>
  </>
  );
};

export default UseStateObject;
