import { Paper, Typography, TextField, FormControl, Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useRef, useState, useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom'
import CreatedUser from './CreatedUser';

// user name can be lower or capital, numbers also - and _, length must 3 < name < 23
const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/

// Email validation. With this short expression you can validate for proper email format. It's short and accurate.
// match bob_smith@foo.com   not match -smith@foo.com 
const email_regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/


// must have one lower, capital, number also specail charater with 8 < pd < 24
const pwd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,16}$/


const Register = () => {


  const navigate = useNavigate()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)


  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)


  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)


  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)




  useEffect(() => {
    const result = user_regex.test(user)
    setValidName(result)
    setShow(false)
  }, [user])

  useEffect(() => {
    const result = email_regex.test(email)
    setValidEmail(result)
    setShow(false)
  }, [email])

  useEffect(() => {
    const result = pwd_regex.test(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd && matchPwd.length > 7
    setValidMatch(match)
    setShow(false)
  }, [pwd, matchPwd])



  const handleSubmit = async () => {
    try {
      const newUser = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        body: JSON.stringify({
          userName: user,
          email: email,
          password: pwd
        })
      })
      if (newUser.status < 400) {
        const content = await newUser.json()
        console.log(newUser)
        console.log(content)
        setSuccess(true)
      } else {
        setErrMsg('Cannot create user or email')
        setSuccess(false)
        setShow(true)
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response')
        setShow(true)
      } else if (error.response?.status === 409) {
        setErrMsg('user name has taken')
        setShow(true)
      } else {
        setErrMsg('Registration Failed')
        setShow(true)
      }
    }

  }

  // if show true meg
  //  show false no msg 
  const [show, setShow] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  return (
    <>
      {success ?
        <CreatedUser />
        :
        <Paper sx={{ p: 3 }}>
          {!show ? "" :
            <Typography sx={{ backgroundColor: 'pink', p: 1 }}>
              {errMsg}
            </Typography>
          }
          <Typography variant="h4">Register</Typography>

          <TextField fullWidth autoComplete='off' required sx={{ m: 1 }} id="standard-basic" label="User Name" placeholder="Require minimun of 4 charaters" variant="outlined"
            onChange={(e) => setUser(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  < CheckCircleOutlineIcon color={validName ? 'success' : 'disabled'} />
                </InputAdornment>
              ),
            }}
          />
          <TextField fullWidth autoComplete='off' required sx={{ m: 1 }} id="standard-basic" type="email" label="Email" placeholder="example: blog@blog.com" variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  < CheckCircleOutlineIcon color={validEmail ? 'success' : 'disabled'} />
                </InputAdornment>
              ),
            }}
          />
          <TextField fullWidth required sx={{ m: 1 }}
            id="standard-basic" label="Password" variant="outlined" type="password"
            placeholder="Require one capital one number with minimun of 8 charaters"
            onChange={(e) => setPwd(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  < CheckCircleOutlineIcon color={validPwd ? 'success' : 'disabled'} />
                </InputAdornment>
              ),
            }} />
          <TextField fullWidth required sx={{ m: 1 }} id="standard-basic" label="Comfrim Password" type="password" placeholder="enter same password again" variant="outlined"
            onChange={(e) => setMatchPwd(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  < CheckCircleOutlineIcon color={validMatch ? 'success' : 'disabled'} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            onClick={() => navigate('/')}
          >Cancel</Button>
          <Button onClick={handleSubmit}
            disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}
          >Register</Button>
        </Paper>
      }
    </>
  )
}

export default Register