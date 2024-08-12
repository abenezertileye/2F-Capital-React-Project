// NonFunctionalButton.js
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the non-functional button
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F4F5F7', // Gray background
    color: '#525256',
    fontSize:'12px !important',
    fontWeight: '300',
    height: '20px',
    borderRadius: 5, // Rounded corners
    cursor: 'not-allowed', // Indicate that it's not interactive
    '&:hover': {
        backgroundColor: '#b0b0b0', // Slightly different gray on hover (optional)
    },
    textTransform: 'none', // Prevent uppercase transformation

}));

const StaticButton = ({ text }) => {
    return (
        <StyledButton disabled>
            {text}
        </StyledButton>
    );
};

export default StaticButton;
