import { Paper, Typography, TextField, FormControl, Button } from '@mui/material'
import React from 'react'



const Register = () => {
  return (
    <>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Register</Typography>
        <FormControl fullWidth>
          <TextField required sx={{ m: 1 }} id="standard-basic" label="User Name" variant="outlined" />
          <TextField required sx={{ m: 1 }} id="standard-basic" label="Email" variant="outlined" />
          <TextField required sx={{ m: 1 }} id="standard-basic" label="Password" variant="outlined" />
          <TextField required sx={{ m: 1 }} id="standard-basic" label="Comfrim Password" variant="outlined" />
        </FormControl>
        <Button>Cancel</Button>
        <Button>Register</Button>


      </Paper>
    </>
  )
}

export default Register