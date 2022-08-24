import React from 'react'
import { Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Box } from '@mui/system'

const BlogDetails = () => {

  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div >
      {isPending && <Typography variant="h5">Loading...</Typography>}
      {error && <Typography variant="h5">{error}</Typography>}
      {blog && (
        <Paper sx={{
          p: 3,
          m: 3,
        }}>
          <Typography variant="h4">{blog.title}</Typography>
          <Typography sx={{ m: 1 }}>Writen by {blog.author}</Typography>
          <Typography >{blog.body}</Typography>
        </Paper>

      )
      }

    </div>
  )
}

export default BlogDetails