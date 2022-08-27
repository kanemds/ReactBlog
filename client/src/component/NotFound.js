import React from 'react'
import { Paper, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 200,
        justifyContent: "center"
      }}>

      <Typography>Sorry, the page is not exist</Typography>
      <br />
      <Button onClick={() => navigate('/')}>home page</Button>

    </Paper>
  )
}

export default NotFound