import React, {useEffect, useState,} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./LoginPage.css"
import axios from 'axios'
import logo from '../images/logo.png'
import { Navigate, useNavigate } from 'react-router-dom';

function Copyright(props) {
  
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          LMS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const theme = createTheme();

export default function SignupPage() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
 const adminPassword = '123456'
const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/register",{
    username: username,
    password:password
    }).then((res) =>{
      console.log(res);
    })
  
};

useEffect(()=>{
    const pass = prompt('')
    if(adminPassword === pass){
        navigate('/admin')
    }
    else{
        navigate('/')
    }
},[])



  return (

    <ThemeProvider theme={theme}>
        <div className="header" >
          <img src={logo} />
        </div>  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" onSubmit = {handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              type="text"
              label="Email Address"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) =>setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Add User
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}