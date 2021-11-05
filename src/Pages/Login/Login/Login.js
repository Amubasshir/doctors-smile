import { Container, Grid } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';

const Login = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h2>welcome to login</h2>
        </Grid>
        <Grid item xs={4} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
