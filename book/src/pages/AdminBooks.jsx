import React, { useState } from 'react';
import { CssBaseline, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import OwnerSidebar from '../components/OwnerSidebar';
import TopBar from '../components/TopBar';
import { tableData } from '../data/TableData';

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

  const handleToggleChange = (no) => {
    setBookData((prevData) =>
      prevData.map((book) =>
        book.no === no ? { ...book, status: book.status === 'Rented' ? 'Free' : 'Rented' } : book
      )
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#A3A3A3' }}>No</TableCell>
            <TableCell sx={{ color: '#A3A3A3' }}>Author</TableCell>
            <TableCell sx={{ color: '#A3A3A3' }}>Owner</TableCell>
            <TableCell sx={{ color: '#A3A3A3' }}>Book Name</TableCell>
            <TableCell sx={{ color: '#A3A3A3' }}>Status</TableCell>
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
                  paddingLeft:'0px'
                }}
              >
                <Box sx={{paddingLeft:'0px', margin:'0px', ...(row.status === 'Rented' ? styles.statusBoxInactive : styles.statusBoxActive)}}>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Main AdminTable component
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
