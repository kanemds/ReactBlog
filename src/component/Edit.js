
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Paper, Typography, TextField, TextareaAutosize, Select, MenuItem, FormControl, Button, InputLabel } from '@mui/material'
import { grey } from '@mui/material/colors'
import useFetch from '../hooks/useFetch'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: blog, error } = useFetch('http://localhost:8000/blogs/' + id)
  const [isPending, setIsPending] = useState(false)
  const [post, setPost] = useState()

  useEffect(() => {
    if (blog) {
      setPost({
        title: blog.title,
        body: blog.body,
        author: blog.author
      })
    }
  }, [blog, setPost])


  const handleUpdate = () => {
    setIsPending(true)

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
      console.log('current blog updated')
      setIsPending(false)
      navigate(`/blogs/${id}`)
    })
  }

  const hanldeDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  if (!blog) {
    return 'Loading...'
  }

  return (
    <div className='create'>
      <Paper sx={{ p: 3 }}>
        <Typography>Edit</Typography>
        <FormControl fullWidth >
          <TextField sx={{ mb: 3 }} required label="Blog title" variant="standard"
            value={post && post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <TextareaAutosize
            minRows={8}
            required
            placeholder="What would you like to share today"
            value={post && post.body}
            style={{ maxWidth: 545 }}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          >
          </TextareaAutosize >
          <FormControl sx={{ mt: 3, mb: 1, color: grey }} size="small">
            <InputLabel sx={{
              fontSize: 14,
              color: grey
            }} id="demo-simple-select-standard-label">Select Author</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={post ? post.author : ''}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: 14
                },
                color: grey
              }}
              label="Select Author"
              onChange={(e) => setPost({ ...post, author: e.target.value })}
            >
              <MenuItem sx={{ color: grey }} value="wiki">wiki</MenuItem>
              <MenuItem value="google">google</MenuItem>
            </Select>
          </FormControl>

        </FormControl>
        <Button onClick={() => navigate(`/blogs/${id}`)}>Back</Button>
        {!isPending ? <Button onClick={handleUpdate}>update</Button> : <Button>updating...</Button>}
        <Button onClick={hanldeDelete}>Delete</Button>

      </Paper>
    </div >
  )
}

export default Edit