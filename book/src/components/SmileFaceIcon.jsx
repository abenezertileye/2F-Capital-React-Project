import React from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Box } from '@mui/material';

function SmileFaceIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      <SentimentSatisfiedAltIcon
        sx={{
          color: '#00ABFF',
          fontSize: 200, // Adjust size as needed
          margin: '16px' // Adjust margin as needed
        }}
      />
    </Box>
  );
}

export default SmileFaceIcon;
