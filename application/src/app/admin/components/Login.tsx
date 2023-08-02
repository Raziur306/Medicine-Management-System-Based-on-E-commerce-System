'use client'
import React, { useContext, useState } from 'react'
import { StyledBox, StyledLoginBtn, StyledParentBox, StyledRegisterTypography, StyledTextField, StyledTypography, StyledTypographyBtn } from '../../styles/loginStyle'

function Login() {
    return (
        <StyledParentBox>
            <StyledBox>
                <StyledTypography>Admin Login</StyledTypography>
                <StyledTextField name='email' type='email' placeholder='Enter your email' />
                <StyledTextField name='password' type='password' placeholder='Enter your password' />
                <StyledLoginBtn >Login</StyledLoginBtn>
            </StyledBox>
        </StyledParentBox >
    )
}

export default Login