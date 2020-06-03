import React from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    border: '1px solid black',
    height: '300px'
  },
  form: {
    padding: theme.spacing(5),
  },
  textField: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(3)
  }
}));


const Login = ({ chekUser }) => {

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelChange = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    })
    if (res.data == 'success') {
      sessionStorage.setItem("username", username)
      chekUser(res.data)
    }else{
      alert('wrong password');
    }
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <form onSubmit={handelChange} className={classes.form} noValidate autoComplete="off">
        <Box justifyContent="center" flexDirection="column" display="flex">
          <TextField name='username' onChange={e => setUsername(e.target.value)} className={classes.textField} id="standard-basic" label="Username" />
          <TextField name='password' onChange={e => setPassword(e.target.value)} className={classes.textField} id="standard-basic" label="Password" />
          <Button type='submit' className={classes.button} variant="contained" color='primary'>Login</Button>
        </Box>
      </form>
    </Container>
  );
}
export default Login;