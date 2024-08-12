import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F4F5F7', 
    color: '#525256',
    fontSize:'12px !important',
    fontWeight: '300',
    height: '20px',
    borderRadius: 5, 
    cursor: 'not-allowed', 
    '&:hover': {
        backgroundColor: '#b0b0b0', 
    },
    textTransform: 'none', 

}));

const StaticButton = ({ text }) => {
    return (
        <StyledButton disabled>
            {text}
        </StyledButton>
    );
};

export default StaticButton;
