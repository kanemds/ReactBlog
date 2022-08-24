import { Button } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

const BlogList = ({ blogs, title }) => {




  return (
    <div className='blog-list'>
      <Typography variant="h5" >{title}</Typography>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Typography variant="h5" >{blog.title}</Typography>
          <Typography variant="h8">Written by {blog.author}</Typography>

        </div>
      ))}
    </div>
  )
}

export default BlogList