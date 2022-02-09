import React, { useState } from "react";

const Home = () => {
    let name1= 'Alex1'
    let age1= 25
    const [name,setName]= useState('Alex')
    const [age,setAge]= useState(25)


const changeName=()=>{
    setName('Yesuf')
    name1= 'Alex1'
    age1= 35

    setAge(30)
}
  const handleClick = () => {
    console.log("Hello, ninja");
  };

  const handleButton2 = (name, e) => {
    console.log("Your name is " + name, e);
  };

  const displayEvents=(e)=>{
      console.log("The event is ",e.target)
  }
  return (
    <div className="home">
      <h1>Home Page</h1>
     <h1 style={{color: 'orange'}}> {name1} is {age1} old</h1>
     <h1 style={{color: 'brown'}}> {name} is {age} old</h1>
      <div></div>
      <button onClick={changeName}>Click me to change names</button>
      {/* The following makes with handleClick() automatically invoke without click
      so we pass without () so it invokes after click */}
      {/* <button onClick={handleClick()}>Click me</button> */}

      <button onClick={handleClick}>Click me</button>

      <button onClick={(e) => handleButton2("Sarah", e)}>Button 2</button>
    
      <button onClick={(e) => displayEvents(e)}>Button 3</button>
</div>
  );
};

export default Home;
