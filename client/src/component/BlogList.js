import { Button, Paper } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {




  return (
    <div className='blog-list'>
      <Typography variant="h5" >{title}</Typography>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Paper sx={{
            p: 3,
            m: 3,
            "&:hover": {
              boxShadow: "0 2px 5px 1px rgba(146, 144, 144, 0.804)",
              cursor: "pointer",
            }
          }}>
            <Link to={`/blogs/${blog.id}`}>
              <Typography variant="h5" >{blog.title}</Typography>
              <Typography variant="h8">Written by {blog.author}</Typography>
            </Link>
          </Paper>
        </div>
      ))}
    </div>
  )
}

export default BlogList