import React from 'react'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

  const { id } = useParams()

  return (
    <div className='blog-details'>
      <Typography variant="h5">BlogDetails-{id}</Typography>
    </div>
  )
}

export default BlogDetails