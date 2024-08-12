import React from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Box } from '@mui/material';

function SmileFaceIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
    >
      <SentimentSatisfiedAltIcon
        sx={{
          color: '#00ABFF',
          fontSize: 200, 
          margin: '16px' 
        }}
      />
    </Box>
  );
}

export default SmileFaceIcon;
