import React from 'react'
import { Paper, Typography, FormControl, TextField, Button } from '@mui/material'

const Login = () => {
  return (
    <>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Login</Typography>
        <FormControl fullWidth>
          <TextField sx={{ m: 1 }} id="standard-basic" label="User Name or Email" variant="outlined" />
          <TextField sx={{ m: 1 }} id="standard-basic" label="Password" variant="outlined" />
        </FormControl>
        <Button>Cancel</Button>
        <Button>Login</Button>
      </Paper>
    </>
  )
}

export default Login