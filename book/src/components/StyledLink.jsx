import {Link,styled} from '@mui/material';

const StyledLink = styled(Link)({
    textDecoration: 'none', 
    '&:hover' : {
        cursor: 'pointer',
    }
  });

export default StyledLink