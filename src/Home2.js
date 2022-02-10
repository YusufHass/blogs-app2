import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home2 = () => {
  const {isPending, error, data:blogArray, name, searchAuthor, setSearchAuthor,setBlogs}= useFetch('http://localhost:8000/blogs');
  
  // handleDelete function that will pass as props to BlogsList
  const handleDelete= (id)=>{

    const newBlogs= blogArray.filter(blog=>
      blog.id!==id)
      setBlogs(newBlogs)
      console.log(newBlogs, id)

  }

  return (
    <div className="home">
      {/*searching by the author name */}
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
   {error && <h2>{error}</h2>}
   {
     isPending && <h4>Loading...</h4>
   }
      {/* displaying the array. We use logical bc first the array is null and wait till populating to 
      blogArray to make the left correct and display the data */}
      {blogArray && <BlogList blogs={blogArray} title="All Blogs!" deleteHandler={handleDelete} />}
      {/* filtering the array and display specifc author work */}
     {blogArray && <BlogList
        blogs={blogArray.filter((blog) => blog.author == "mario")}
        title="Mario's Blog"
        />}
    </div>
  );
};

export default Home2;
