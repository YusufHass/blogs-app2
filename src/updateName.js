import React, { useState } from "react";

const UpdateName = () => {
  const [name, setName] = useState("Khalid");

  function updateNames(){
    setName('Alex')
  }
  return (
  <div>
      <h1 style={{color: 'brown'}}>{name}</h1>
      <div></div>
      <button onClick={()=>setName('Nathan')}>Change name with a Method 1</button>
      <div></div>
      <button onClick={updateNames}>Change name with a Method 2</button>

  </div>
  )};

export default UpdateName;
