import React from 'react'
import {Avatar,Checkbox, FormControlLabel} from '@mui/material';
import StyledTextField from '../components/StyledTextField';
import StyledButton from '../components/StyledButton';
import StyledLink from '../components/StyledLink';
import book from '../assets/book.png'
import bookLogo from '../assets/book-logo.png';


function OwnerSignUp() {
  return (
    <div className='auth-container'>
        <div className='auth-side-image'>
            <img src= {book} alt="" />
        </div>
        <div className='auth-content'>
            <div className='auth-header'>
                <Avatar src= {bookLogo} ></Avatar>
                <p>Book Rent</p>
            </div>
            <p>Signup as Owner</p>
            <hr className='divider'/> 
            <StyledTextField className='text-field' id="email" label="Enter Email" />
            <StyledTextField className='text-field' id="password" label="Password" />
            <StyledTextField className='text-field' id="confirm password" label="Confirm Password" />
            <StyledTextField className='text-field' id="location" label="Location" />
            <StyledTextField className='text-field' id="phone number" label="Phone Number" />

            <FormControlLabel control={<Checkbox />} label="I accept the Terms and Conditions" />

            <StyledButton className='auth-button'>Sign Up</StyledButton>

            <p style={{textAlign: 'center'}} >Already have an account? <StyledLink to="/login">Login</StyledLink></p>

        </div>
    </div>
  )
}

export default OwnerSignUp