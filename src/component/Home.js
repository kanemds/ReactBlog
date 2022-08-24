import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState(null)



  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <div className='home'>
      {/* the inital blogs is null, it's error due to the mapping on BlogList
       by doing blogs &&, it first make sure blogs exist then run the right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}




    </div>

  )
}

export default Home