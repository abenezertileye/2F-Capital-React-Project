import React from 'react'
import { CssBaseline, Box, Card, Divider, Typography } from '@mui/material';
import StaticButton from './StaticButton';
import { ArrowDownward } from '@mui/icons-material';

function SummaryCard() {
  return (
    <Card sx={{ margin: '20px 20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', margin: '10px 0px' }}>
        <Typography variant="body2" sx={{color: '#525256'}}>Income</Typography>
        <StaticButton text='This Month'></StaticButton>
      </Box>

      <Divider sx={{ borderColor: 'rgba(211, 211, 211, 0.5)', width: '90%', mx: 'auto' }} />

      <Box sx={{ display: 'flex', gap: '10px', padding: '0px 10px', alignItems: 'flex-end', margin: '10px' }}>
        <Typography variant="h6" sx={{fontWeight: '700'}}>ETB 9460.00</Typography>
        <ArrowDownward sx={{ color: 'red', marginBottom: '10px' }} />
        <Typography variant="body2" sx={{ color: 'red', marginBottom: '15px' }}>1.5%</Typography>
      </Box>

      <Box sx={{margin: '10px 20px'}}>
        <Typography variant="body2" sx={{color:'#A3A3A3'}}>Compared to ETB 9940 last month</Typography>
        <Typography variant="body2" sx={{color:'#525256'}}>Last month income ETB 25658.00</Typography>
      </Box>
    </Card>
  );
}

export default SummaryCard