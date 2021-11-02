import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(47, 59, 75, .9 )',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 150,
};

const AppointmentBanner = () => {
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: '-110px' }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 5 }}
                style={{ color: '#52DEDB' }}
              >
                {' '}
                Appointment{' '}
              </Typography>
              <Typography
                variant="h4"
                sx={{ my: 5 }}
                style={{ color: 'white' }}
              >
                Make an Appointment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 5 }}
                style={{ color: 'white', fontSize: 14, fontWeight: 300 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, repudiandae odio placeat quod unde facilis gdhg emi
                nai abind all!
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: '#52DEDB' }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
