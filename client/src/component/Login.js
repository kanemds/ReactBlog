import React, { useState, useEffect, useContext } from 'react'
import { Paper, Typography, FormControl, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/ AuthProvider'


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

  const handleSubmit = async () => {

    if (!user || !pwd) {
      setShow(true)
      setErrMsg('User and Email are required')
    }

    try {
      const loginUser = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        body: JSON.stringify({
          userName: user,
          password: pwd
        })

      })

      if (loginUser.status < 400) {
        const content = await loginUser.json()
        console.log(loginUser)
        console.log(content)
        setAuth({ user, pwd })
        setPwd('')
        setUser('')
        setShow(false)
        navigate('/')
      }
    } catch (error) {
      if (!error?.response) {
        setShow(true)
        setErrMsg('No Server Response')

      } else if (error.response?.status === 400) {
        setShow(true)
        setErrMsg('User and Email are required')

      } else if (error.response?.status === 401) {
        setShow(true)
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
        {!show ? "" :
          <Typography sx={{ backgroundColor: 'pink', p: 1 }}> {errMsg}</Typography>
        }
        <Typography variant="h4">Login</Typography>
        <FormControl fullWidth>
          <TextField sx={{ m: 1 }} type="text" autoComplete='off' id="standard-basic" label="User Name" variant="outlined"
            onChange={e => setUser(e.target.value)} value={user} required
          />
          <TextField sx={{ m: 1 }} id="standard-basic" label="Password" type="password" variant="outlined"
            onChange={e => setPwd(e.target.value)} value={pwd} required />
        </FormControl>
        <Button onClick={() => navigate('/')}>Cancel</Button>
        <Button onClick={handleSubmit}>Login</Button>
      </Paper>
    </>
  )
}

export default Login