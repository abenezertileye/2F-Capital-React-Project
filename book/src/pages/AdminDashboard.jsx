import React from 'react';
import { CssBaseline, Box,IconButton, Card, Divider, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Radio } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import OwnerSidebar from '../components/OwnerSidebar';
import BooksStat from '../components/BooksStat';
import SummaryCard from '../components/SummaryCard';
import SummaryTitle from '../components/SummaryTitle';
import TopBar from '../components/TopBar';
import { tableData } from '../data/TableData';
import LineGraph from '../components/LineGraph';
import StaticButton from '../components/StaticButton';
import EditIcon from '@mui/icons-material/Edit';

const styles = {
  rented: {
    color: 'red',
    '&.Mui-checked': {
      color: 'red',
    },
  },
  free: {
    color: 'blue',
    '&.Mui-checked': {
      color: 'blue',
    },
  },
};

const BookTable = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{
      maxHeight: 400, 
      overflowY: 'auto',
    }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'#A3A3A3'}}>No</TableCell>
            <TableCell sx={{color:'#A3A3A3'}}>Book No</TableCell>
            <TableCell sx={{color:'#A3A3A3'}}>Owner</TableCell>
            <TableCell sx={{color:'#A3A3A3'}} >Status</TableCell>
            <TableCell sx={{color:'#A3A3A3'}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.no}>
              <TableCell>{row.no}</TableCell>
              <TableCell ><StaticButton text={row.bookNo} sx={{color:'black'}}></StaticButton></TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell sx={{color:'#A3A3A3'}}>
              <Radio
                  checked={true}
                  sx={row.status === 'Rented'? styles.rented : styles.free}
                  disabled
                />

                {row.status}</TableCell>
              <TableCell sx={{color:'#A3A3A3'}}>{`${row.price} Birr`}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


function AdminDashboard() {

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F0F2FF', height: '100%' }}>
      <CssBaseline />
      <OwnerSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2, marginTop: '100px', display: 'flex', gap: '20px', height: '100%', paddingBottom: '100px' }}>

          <Box sx={{ backgroundColor: 'white', mb: 2, width: '300px', borderRadius: '10px',paddingTop:'10px' }}>
            <SummaryTitle></SummaryTitle>
            <SummaryCard></SummaryCard>
            <BooksStat></BooksStat>            
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 3 }}>
            <Box sx={{ backgroundColor: 'white', borderRadius: '10px', padding:'25px'}}>
              <TopBar></TopBar>
              <Typography sx={{fontWeight: '700'}}>Live Book Status</Typography>
              <BookTable />
            </Box>

            <Box sx={{ backgroundColor: 'white', flexGrow: 1, borderRadius: '10px' }}>
                <LineGraph></LineGraph>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
