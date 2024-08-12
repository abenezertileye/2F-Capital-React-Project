import React from 'react'
import {Avatar,Checkbox, FormControlLabel} from '@mui/material';
import StyledTextField from '../components/StyledTextField';
import StyledButton from '../components/StyledButton';
import StyledLink from '../components/StyledLink';
import book from '../assets/book.png'
import bookLogo from '../assets/book-logo.png';

function Login() {
  return (
    <div className='auth-container'>
        <div className='sign-up-side-image'>
            <img src= {book} alt="" />
        </div>
        <div className='auth-content'>
            <div className='auth-header'>
                <Avatar src= {bookLogo} ></Avatar>
                <p>Book Rent</p>
            </div>
            <p>Login</p>
            <hr className='divider'/> 
            <StyledTextField className='text-field' id="email" label="Enter Email" />
            <StyledTextField className='text-field' id="password" label="Password" />

            <FormControlLabel control={<Checkbox />} label="Remember me" />

            <StyledButton className='auth-button'>Log In</StyledButton>

            <p style={{textAlign: 'center'}} >Have not an account? <StyledLink to="/owner-signup">Sign up</StyledLink></p>

        </div>
    </div>
  )
}

export default Login