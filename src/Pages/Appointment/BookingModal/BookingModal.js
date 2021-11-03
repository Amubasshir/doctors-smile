import { Button, Fade, Modal, Typography } from '@mui/material';
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
  bgColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;

  const handleBookingSubmit = (e) => {
    alert('submitting');

    //   collect data
    //   send to the server

    handleBookingClose();
    e.preventDefault();
  };

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
        <Box style={{ backgroundColor: 'white' }} sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form
            onSubmit={handleBookingSubmit}
            style={{ backgroundColor: 'white' }}
          >
            <TextField
              disabled
              sx={{ width: '90%', margin: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: '90%', margin: 1 }}
              id="outlined-size-small"
              defaultValue="Your Name"
              size="small"
            />
            <TextField
              sx={{ width: '90%', margin: 1 }}
              id="outlined-size-small"
              defaultValue="Your Email"
              size="small"
            />
            <TextField
              sx={{ width: '90%', margin: 1 }}
              id="outlined-size-small"
              defaultValue="Your Phone-number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '90%', margin: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: '#5cb85c' }}
            >
              Book
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
