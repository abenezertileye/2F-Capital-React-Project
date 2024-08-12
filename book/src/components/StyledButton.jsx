import {Button, styled} from '@mui/material';


const StyledButton = styled(Button)(({ theme }) => ({
    width: '100%',  
    backgroundColor: '#00ABFF',  
    color: 'white',
    transition: 'box-shadow 0.3s ease-in-out', 
    '&:hover': {
      backgroundColor: '#00ABFF',  
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',  
    },
    
  }));

  export default StyledButton