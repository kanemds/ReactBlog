import { Button } from '@mui/material'
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
          <Link to={`/blogs/${blog.id}`}>
            <Typography variant="h5" >{blog.title}</Typography>
            <Typography variant="h8">Written by {blog.author}</Typography>
          </Link>


        </div>
      ))}
    </div>
  )
}

export default BlogList