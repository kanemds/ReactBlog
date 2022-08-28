import { Paper, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CreatedUser = () => {

  return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 300
      }}>
        <Typography>
          User has been created!
        </Typography>
        <br />
        <Link to='/'>go to home page</Link>
      </Paper>
    </Box>
  )
}

export default CreatedUser