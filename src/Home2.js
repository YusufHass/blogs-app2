import { getByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import BlogList from "./BlogList";

const Home2 = () => {
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
  ]);

  return (
    <div className="home">
      {/* displaying the array */}
      <BlogList blogs= {blogArray} title= "All Blogs!"/>
    </div>
  );
};

export default Home2;
