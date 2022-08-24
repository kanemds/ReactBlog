import React, { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "DarkSoul", body: "DarkSoul", author: "a", id: 1 },
    { title: "EldenRing", body: "EldenRing", author: "b", id: 2 },
    { title: "FF14", body: "FF14", author: "a", id: 3 },
  ])

  const handleDelete = (id) => {
    // filter retrun new array
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className='home'>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter(blog => blog.author === "a")} title="B's blogs" handleDelete={handleDelete} />



    </div>

  )
}

export default Home