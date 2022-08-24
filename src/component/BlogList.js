import { Button } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

const BlogList = ({ blogs, title, handleDelete }) => {




  return (
    <div className='blog-list'>
      <Typography variant="h5" >{title}</Typography>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Typography variant="h5" >{blog.title}</Typography>
          <Typography variant="h8"> {blog.author}</Typography>
          <Box>
            <Button variant='contained' sx={{ m: 2 }} onClick={() => handleDelete(blog.id)}>Delete Blog</Button>
          </Box>
        </div>
      ))}
    </div>
  )
}

export default BlogList