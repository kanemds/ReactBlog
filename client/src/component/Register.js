import { Paper, Typography, TextField, FormControl, Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useRef, useState, useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment';

// user name can be lower or capital, numbers also - and _, length must 3 < name < 23
const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/

// Email validation. With this short expression you can validate for proper email format. It's short and accurate.
// match bob_smith@foo.com   not match -smith@foo.com 
const email_regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/


// must have one lower, capital, number also specail charater with 8 < pd < 24
const pwd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,16}$/


const Register = () => {

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)


  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)


  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)


  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    const result = user_regex.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = email_regex.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = pwd_regex.test(pwd)
    console.log(result)
    console.log(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd && matchPwd.length > 7
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const handleSubmit = () => {

  }

  return (
    <>
      <Paper sx={{ p: 3 }}>
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

        <Button>Cancel</Button>
        <Button onClick={handleSubmit}
          disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}

        >Register</Button>


      </Paper>
      {user}
      <br />
      {email}
      <br />
      {pwd}
      <br />
      {matchPwd}
      <br />

    </>
  )
}

export default Register