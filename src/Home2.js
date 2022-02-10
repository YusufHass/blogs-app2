import { getByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import BlogList from "./BlogList";

const Home2 = () => {
  const [searchAuthor, setSearchAuthor] = useState();
  const [blogArray, setBlogs] = useState([
    {
      title: "My new wesbsite",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },
    { title: "Welcome party", body: "lorem ipsum...", author: "Moshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Mario",
      id: 3,
    },
    {
      title: "React for developer",
      body: "lorem ipsum...",
      author: "Yoshi",
      id: 4,
    },
  ]);
  // handleDelete function that will pass as props to BlogsList
  const handleDelete= (id)=>{

    const newBlogs= blogArray.filter(blog=>
      blog.id!==id);
      setBlogs(newBlogs)
      console.log(newBlogs, id)

  }

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


      {/* displaying the array */}
      <BlogList blogs={blogArray} title="All Blogs!" deleteHandler= {handleDelete} />
      {/* filtering the array and display specifc author work */}
      <BlogList
        blogs={blogArray.filter((blog) => blog.author == "Mario")}
        title="Mario's Blog"
      />
    </div>
  );
};

export default Home2;
