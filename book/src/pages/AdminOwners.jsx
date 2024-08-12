import React, { useState } from 'react';
import { CssBaseline, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch, Dialog, DialogTitle, DialogActions, DialogContent, TextField, Typography, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import OwnerSidebar from '../components/OwnerSidebar';
import TopBar from '../components/TopBar';
import { tableData } from '../data/TableData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

// Styles for Switch component
const styles = {
  switchActive: {
    '& .MuiSwitch-track': {
      backgroundColor: '#4caf50', // active state color
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#4caf50', // Toggle knob color for active
    },
    '& .Mui-checked': {
      color: '#fff', // Color of toggle knob when active
      '& + .MuiSwitch-track': {
        backgroundColor: '#4caf50', // Active state color (green)
      },
    },
  },
  switchInactive: {
    '& .MuiSwitch-track': {
      backgroundColor: '#f44336', // Inactive state color (red)
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#f44336', // Toggle knob color
    },
    '& .Mui-checked': {
      color: '#fff', // Color of toggle knob when active
      '& + .MuiSwitch-track': {
        backgroundColor: '#f44336', // Active state color (red)
      },
    },
  },
  statusBoxActive: {
    backgroundColor: '#d4edda', // Green background for active
    borderRadius: '30px',
    padding: '0px 30px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#155724', // Dark green text
  },
  statusBoxInactive: {
    backgroundColor: '#f8d7da', // Red background for inactive
    borderRadius: '30px',
    padding: '0px 30px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#721c24', // Dark red text
  },
};

// Table component for displaying books
const BookTable = ({ data }) => {
  const [bookData, setBookData] = useState(data);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleToggleChange = (no) => {
    setBookData((prevData) =>
      prevData.map((book) =>
        book.no === no ? { ...book, status: book.status === 'Rented' ? 'Free' : 'Rented' } : book
      )
    );
  };

  const handleButtonClick = (no) => {
    setBookData((prevData) =>
      prevData.map((book) =>
        book.no === no ? { ...book, buttonStatus: book.buttonStatus === 'Approve' ? 'Approved' : 'Approve' } : book
      )
    );
  };

  const handleDialogOpen = (book) => {
    setSelectedBook(book);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedBook(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#A3A3A3' }}>No</TableCell>
              <TableCell sx={{ color: '#A3A3A3' }}>Author</TableCell>
              <TableCell sx={{ color: '#A3A3A3' }}>Owner</TableCell>
              <TableCell sx={{ color: '#A3A3A3' }}>Book Name</TableCell>
              <TableCell sx={{ color: '#A3A3A3' }}>Status</TableCell>
              <TableCell sx={{ color: '#A3A3A3' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookData.map((row) => (
              <TableRow key={row.no}>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.author || 'Unknown'}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.bookName}</TableCell>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    paddingLeft: '0px'
                  }}
                >
                  <Box sx={{ paddingLeft: '0px', margin: '0px', ...(row.status === 'Rented' ? styles.statusBoxInactive : styles.statusBoxActive) }}>
                    <DoneIcon />
                    <Typography variant="body2">
                      {row.status === 'Rented' ? 'Inactive' : 'Active'}
                    </Typography>
                    <Switch
                      checked={row.status === 'Rented'}
                      sx={row.status === 'Rented' ? styles.switchInactive : styles.switchActive}
                      onChange={() => handleToggleChange(row.no)}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px', // Adds space between elements
                      height: '100%', // Ensures full height for alignment
                    }}
                  >
                    <VisibilityIcon onClick={() => handleDialogOpen(row)} style={{ cursor: 'pointer' }} />
                    <DeleteIcon sx={{ color: 'red' }} />
                    <Button
                      sx={{
                        backgroundColor: row.buttonStatus === 'Approved' ? '#00ABFF' : '#AFAFAF',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: row.buttonStatus === 'Approved' ? '#00ABFF' : '#9e9e9e'
                        }
                      }}
                      onClick={() => handleButtonClick(row.no)}
                    >
                      {row.buttonStatus || 'Approve'}
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for book details */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          {selectedBook && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  <TextField
    label="Name"
    value={selectedBook?.owner || 'N/A'} // Use 'N/A' or any default value if `selectedBook` is null or undefined
    variant="outlined"
    disabled
    fullWidth
    InputProps={{
      style: { color: 'black' }
    }}
  />
  <TextField
    label="Email Address"
    value="sample@gmail.com" // Use default if email is not available
    variant="outlined"
    disabled
    fullWidth
    InputProps={{
      style: { color: 'black' }
    }}
  />
  <TextField
    label="Location"
    value="Addis Ababa" // Use default if location is not available
    variant="outlined"
    disabled
    fullWidth
    InputProps={{
      style: { color: 'black' }
    }}
  />
  <TextField
    label="Phone Number"
    value="0911223344" // Use default if phone number is not available
    variant="outlined"
    disabled
    fullWidth
    InputProps={{
      style: { color: 'black' }
    }}
  />
</Box>

          )}
        </DialogContent>
        
      </Dialog>
    </>
  );
};

// Main AdminBooks component
function AdminBooks() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F0F2FF' }}>
      <CssBaseline />
      <OwnerSidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 3 }}>
        <Box sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '25px', margin: '100px 20px 0 20px' }}>
          <TopBar />
          <Typography sx={{ fontWeight: '700' }}>List Of Owner</Typography>
          <BookTable data={tableData} />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminBooks;
