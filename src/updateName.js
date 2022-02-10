import React, { useState } from "react";

const UpdateName = () => {
  const [name, setName] = useState("Khalid");
  return (
  <div>
      {name}
      <button onClick={()=>setName('John')}>Click to change name</button>
  </div>
  )};

export default UpdateName;
