import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'
import { Typography } from '@mui/material'

const Home = () => {

  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsPending(false)
        })
    }, 2000)
  }, [])

  return (
    <div className='home'>
      {/* the inital blogs is null, it's error due to the mapping on BlogList
       by doing blogs &&, it first make sure blogs exist then run the right */}
      {isPending && <Typography variant="h5" >Loading...</Typography>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}




    </div>

  )
}

export default Home