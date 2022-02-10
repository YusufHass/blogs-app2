import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home2 = () => {
  const [searchAuthor, setSearchAuthor] = useState();
  const [blogArray, setBlogs] = useState(null);
  const [name, setName]= useState('Mario')
  // handleDelete function that will pass as props to BlogsList
  const handleDelete= (id)=>{

    const newBlogs= blogArray.filter(blog=>
      blog.id!==id)
      setBlogs(newBlogs)
      console.log(newBlogs, id)

  }
// useEffect always render when the function run
  useEffect(()=>{
    //you can use useEffect(async()) or .then as below

 fetch('http://localhost:8000/blogs') // npx json-server --watch data/db.json --port 8000
.then (res=>{
  return res.json()
})
.then((data)=>{
  console.log(data)
  setBlogs(data)
})

  },[name]);//adding the empty dependency makes the function run only intial render and
  // if we pass value in the empty array then it renders only when the passed value is passed

  return (
    <div className="home">
      {/* searching by the author name */}
      <input
        style={{ width: "300px", padding: "5px", fontSize: "large" }}
        placeholder="search by author name" value={searchAuthor}
        onChange= {(event)=>setSearchAuthor(event.target.value)}
      ></input>
   {/* {blogArray.filter((blo)=>{
     if(searchAuthor==''){
       return blo
     }
     else if(blo.author.toLocaleLowerCase().includes(searchAuthor.toLocaleLowerCase())){
       return blo
     }}).map((val)=>{
       <div className="user" key={val.id}>
                         <h1>Written by {val.author}</h1>
       </div>
     })}
   {console.log({searchAuthor})} */}


      {/* displaying the array. We use logical bc first the array is null and wait till populating to 
      blogArray to make the left correct and display the data */}
      {blogArray && <BlogList blogs={blogArray} title="All Blogs!" deleteHandler={handleDelete} />}
      {/* filtering the array and display specifc author work */}
     {blogArray && <BlogList
        blogs={blogArray.filter((blog) => blog.author == "mario")}
        title="Mario's Blog"
        />}
            {name}
      <button onClick={()=>setName('Khalid')}>Update name</button>
    </div>
  );
};

export default Home2;
