import React, { useState } from 'react'
import { Paper, Typography, TextField, TextareaAutosize, Select, MenuItem, FormControl, Button, InputLabel } from '@mui/material'


const Create = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")


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
            onChange={(e) => setBody(e.target.value)}
          >
          </TextareaAutosize >
          <FormControl sx={{ mt: 3, mb: 1 }} size="small">
            <InputLabel sx={{
              fontSize: 12
            }} id="demo-simple-select-standard-label">Select Author</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={author}
              sx={{
                maxWidth: 120,
                '& .MuiInputBase-input': {
                  fontSize: 12
                }
              }}
              label="Select Author"
              onChange={(e) => setAuthor(e.target.value)}
            >
              <MenuItem value={"wiki"}>wiki</MenuItem>
              <MenuItem value={"google"}>google</MenuItem>
            </Select>
          </FormControl>
          <Button>Create</Button>
        </FormControl>

      </Paper>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  )
}

export default Create