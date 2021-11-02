import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
// import bg from '../../../images/bg.png';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400,
};

const Banner = () => {
  return (
    <div>
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: 'left' }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Start Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 5, fontSize: 14, fontWeight: 300, color: 'gray' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                voluptas expedita optio, quo possimus natus, iste molestias
                accusantium recusandae cum vitae debitis. Quaerat, a.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: '#52DEDB' }}
              >
                {' '}
                GET APPOINTMENT
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: '350px' }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
