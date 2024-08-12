import React from 'react'
import { CssBaseline, Box, Card, Divider, Typography } from '@mui/material';

function SummaryTitle() {
    return (
        <Box sx={{ paddingLeft: '15px', marginBottom:'35px' }}>
          <Typography variant="body1" sx={{color: '#525256'}}>This Month Statistics</Typography>
          <Typography variant="body2" sx={{color:'#A3A3A3', fontSize: '13px'}}>Tue, Nov, 2024, 11:30 AM</Typography>
        </Box>
      );
}

export default SummaryTitle