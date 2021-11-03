import { Fade, Modal, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking }) => {
  const { name, time } = booking;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form>
            <TextField
              label="Size"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
            />
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;