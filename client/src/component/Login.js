import React, { useState, useEffect, useRef, useContext } from 'react'
import { Paper, Typography, FormControl, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/ AuthProvider'
import { response } from 'express'

const Login = () => {

  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext)



  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [user, pwd])

  const handleSubmit = () => {
    try {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        body: JSON.stringify({
          userName: user,
          password: pwd
        })
      })
        .then(response => response.json())
      console.log(response)
        .then(() => {
          console.log('Success')
        })

    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response')
        setShow(true)
      } else if (error.response?.status === 400) {
        setErrMsg('Missing User name or Password')
        setShow(true)
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
        setShow(true)
      }
    }

  }

  return (
    <>
      <Paper sx={{ p: 3 }}>
        {show ? "" :
          <Typography> {errMsg}</Typography>
        }
        <Typography variant="h4">Login</Typography>
        <FormControl fullWidth>
          <TextField sx={{ m: 1 }} type="text" autoComplete='off' id="standard-basic" label="User Name" variant="outlined"
            onChange={e => setUser(e.target.value)} value={user} required
          />
          <TextField sx={{ m: 1 }} id="standard-basic" label="Password" variant="outlined"
            onChange={e => setPwd(e.target.value)} value={pwd} required />
        </FormControl>
        <Button onClick={() => navigate('/')}>Cancel</Button>
        <Button onClick={handleSubmit}>Login</Button>
      </Paper>
    </>
  )
}

export default Login