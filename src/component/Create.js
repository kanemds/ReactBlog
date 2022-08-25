import React, { useState } from 'react'
import { Paper, Typography, TextField, TextareaAutosize, Select, MenuItem, FormControl, Button, InputLabel } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      navigate('/')
    })
  }


  return (
    <div className='create'>
      <Paper sx={{ p: 3 }}>
        <Typography>Create</Typography>
        <FormControl fullWidth >
          <TextField sx={{ mb: 3 }} required label="Blog title" variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextareaAutosize
            minRows={8}
            required
            placeholder="What would you like to share today"
            value={body}
            style={{ maxWidth: 545 }}
            onChange={(e) => setBody(e.target.value)}
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
              value={author}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: 14
                },
                color: grey
              }}
              label="Select Author"
              onChange={(e) => setAuthor(e.target.value)}
            >
              <MenuItem sx={{ color: grey }} value={"wiki"}>wiki</MenuItem>
              <MenuItem value={"google"}>google</MenuItem>
            </Select>
          </FormControl>

        </FormControl>
        <Button onClick={() => navigate('/')}>Back</Button>
        {!isPending ? <Button onClick={handleSubmit}>Create</Button> : <Button>Adding...</Button>}

      </Paper>
    </div >
  )
}

export default Create