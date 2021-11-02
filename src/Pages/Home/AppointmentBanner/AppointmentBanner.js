import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner = {
  background: `url(${bg})`,
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
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Appointment</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
