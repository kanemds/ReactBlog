import React from 'react'
import { Paper, Typography, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import Edit from './Edit'

const BlogDetails = () => {

  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate()



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
          <Button onClick={() => navigate('/')}>Back</Button>
          <Button onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
        </Paper>
      )
      }

    </div >
  )
}

export default BlogDetails