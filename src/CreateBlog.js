import React, { useState } from 'react'

const CreateBlog = () => {
  const [title, setTitle]= useState();
  const [body, setBody]= useState();
  const [author, setAuthor]= useState('Khalid');
  const [isPending, setIsPending]= useState(false)
  const handleSubmit= (e)=>{
     e.preventDefault();//prevents submit and refresh the page
     const blog={title,body,author};
     console.log(blog)
  
     setIsPending(true);

     fetch('http://localhost:8000/blogs', {
       method: 'POST',
       headers:{"Content-Type": "application/json"},
       body: JSON.stringify(blog)

     }).then(()=>{
      console.log("New blog added")
      setIsPending(false)
    }) 



  }

  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <div></div>
        {/* submitting the form using the onSubmit  */}
        <form onSubmit={handleSubmit}>
          <label>Blog Title: </label>
          <input type='text' required placeholder='Enter the title..' onChange={(e)=>setTitle(e.target.value)}></input>
          <label>Blog Body: </label>
          <textarea placeholder='Enter the blog body here...' required onChange={(e)=>setBody(e.target.value)}></textarea>
          <label>Blog Author: </label>
          <select onChange={(e)=>setAuthor(e.target.value)} >
            <option value='khalid'>Khalid</option>
            <option value='alexis'>Alexis</option>
            <option value='joseph'>Joseph</option>

          </select>
          {!isPending &&<button>Submit Blog</button>}
          {isPending &&<button disabled>Submitting Blog...</button>}

        </form>
        {/* two ways can be submitted a form attaching *onClick* on the botton
         or adding *onSubmit* on the form tag*/}


    </div>
  )
}

export default CreateBlog