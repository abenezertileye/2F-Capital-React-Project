import React, { useState } from 'react';
import { CssBaseline, Box, Typography, Select, MenuItem, FormControl, InputLabel, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import OwnerSidebar from '../components/OwnerSidebar';
import UploadIcon from '@mui/icons-material/Upload';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SmileFaceIcon from '../components/SmileFaceIcon';

function BookUpload() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedBook(value);
    if (value === 'add') {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenSecondDialog = () => {
    setOpenDialog(false); // Close the first dialog
    setOpenSecondDialog(true); // Open the second dialog
  };

  const handleCloseSecondDialog = () => {
    setOpenSecondDialog(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F0F2FF' }}>
      <CssBaseline />
      <OwnerSidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 3 }}>
        <Box sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '25px', height: '100%', margin: '100px 20px 0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ color: '#525256' }}>Upload New Book</Typography>
          
          <FormControl fullWidth variant="filled" sx={{ marginTop: 2, width: '25%' }}>
            <InputLabel>Search ...</InputLabel>
            <Select
              label="Search ..."
              value={selectedBook}
              onChange={handleChange}
            >
              <MenuItem value="book1">Book 1</MenuItem>
              <MenuItem value="book2">Book 2</MenuItem>
              <MenuItem value="add" sx={{ color: '#00ABFF' }}>Add</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginTop: '40px', width: '100%' }}>
            <FormControl variant="outlined" sx={{ width: '200px' }}>
              <InputLabel>Quantity</InputLabel>
              <Select
                label="Quantity"
                defaultValue=""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Rent Price For Two Weeks"
              variant="outlined"
              sx={{ width: '200px' }} // Adjusted width to 200px for better fit
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, margin: '40px 0' }}>
            <UploadIcon sx={{ color: '#00ABFF' }} />
            <Typography sx={{ fontWeight: '400', color: '#00ABFF' }}>Upload New Book</Typography>
          </Box>
          <Button
            sx={{ backgroundColor: '#00ABFF', color: 'white', width: '25%', padding: '20px 0', borderRadius: '20px' }}
          >
            Submit
          </Button>

          {/* Dialog for adding a new book */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Add Book</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Book Name"
                fullWidth
                variant="filled"
                sx={{ marginTop: 2 }}
              />
              <TextField
                margin="dense"
                label="Author Name"
                fullWidth
                variant="filled"
                sx={{ marginTop: 2 }}
              />
              <TextField
                margin="dense"
                label="Category"
                fullWidth
                variant="filled"
                sx={{ marginTop: 2 }}
              />
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button
                sx={{ backgroundColor: '#00ABFF', color: 'white', width: '95%', padding: '10px 0', borderRadius: '10px' }}
                onClick={handleOpenSecondDialog} // Open the second dialog
              >
                Add
              </Button>
            </DialogActions>
          </Dialog>

          {/* Second Dialog */}
          <Dialog open={openSecondDialog} onClose={handleCloseSecondDialog}>
            <SmileFaceIcon></SmileFaceIcon>
            <DialogTitle sx={{textAlign:'center', fontSize:'40px', fontWeight:'700px'}}>Congrates!</DialogTitle>
            <DialogContent>
              <Typography variant='body1' sx={{color:'gray'}}>Your have uploaded the book successfully. Wait until we approved it.</Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button
                sx={{ backgroundColor: '#00ABFF', color: 'white', width: '95%', padding: '10px 0', borderRadius: '10px' }}
                onClick={handleCloseSecondDialog}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default BookUpload;
