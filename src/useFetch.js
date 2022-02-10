import React, {useEffect, useState} from 'react'

//we should start *use* infornt of the function name to use custom hook in react
const useFetch = (url) => {

  const [searchAuthor, setSearchAuthor] = useState();
  const [data, setData] = useState(null);
  const [name, setName]= useState('Mario')
  const [isPending, setIsPending]= useState(true)
  const [error, setError]= useState(null)
 
// useEffect always render when the function run
useEffect(()=>{
    //you can use useEffect(async()) or .then as below for promise return

 setTimeout(()=>{
//   fetch('http://localhost:8000/blogs') // npx json-server --watch data/db.json --port 8000
fetch(url) // we need to pass url instead of hardcode since we may need to pass diffetn url for differnt component 
.then (res=>{
    if(!res.ok){
      throw Error('Could not find the data with the link')//this error displayed in catch blocks
    }
    return res.json()
  })
  .then((data)=>{
    console.log(data)
    setData(data)
    setIsPending(false)
    setError(null)
  })
  .catch (err=>{
    console.log(err.message)//displays error in console
    setError(err.message)//sets error 
    setIsPending(false)
  })

 }, 1000)//waits 1 second to display the data

 return console.log('Cleaned')
  },[url]);//adding the empty dependency makes the function run only intial render and
  // if we pass value in the empty array then it renders only when the passed value is passed

 // return [searchAuthor, data,name,isPending,error]// ordering of the array when distructuring them matters

return {searchAuthor, data,name,isPending,error, setData, setSearchAuthor}// we return the objects so we can use them in the other files and ordering when distructuring doesnt matter
}

export default useFetch