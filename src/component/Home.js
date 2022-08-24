import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'
import { Typography } from '@mui/material'

const Home = () => {

  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(res => {
          //res.ok is a property
          if (!res.ok) {
            //custom error message
            throw Error('Data not found or Connection problem')
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          setIsPending(false)
          setError(err.message)
        })
    }, 2000)
  }, [])

  return (
    <div className='home'>
      {/* the inital blogs is null, it's error due to the mapping on BlogList
       by doing blogs &&, it first make sure blogs exist then run the right */}
      {error && <Typography variant="h5" >{error} </Typography>}
      {isPending && <Typography variant="h5" >Loading...</Typography>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}




    </div>

  )
}

export default Home