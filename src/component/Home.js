import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'
import { Typography } from '@mui/material'
import useFetch from '../hooks/useFetch'

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

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