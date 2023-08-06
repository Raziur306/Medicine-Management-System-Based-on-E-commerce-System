'use client'

import React, { useContext, useState } from 'react'
import { StyledBox, StyledLoginBtn, StyledParentBox, StyledRegisterTypography, StyledTextField, StyledTypography, StyledTypographyBtn } from '../styles/registrationStyle'
import { UserApiContext } from '../context/UserApiContext'
import { Backdrop, CircularProgress } from '@mui/material'

const Registration = () => {
    const { showLogin, setShowLogin, isLoading, registerUserCall } = useContext(UserApiContext)

    const [data, setData] = useState({
        pharmacyName: "",
        name: "",
        email: "",
        phone: null,
        licenseNumber: null,
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleLoginClick = () => {
        setShowLogin(!showLogin)
    }

    const handleOnRegisterBtnClick = () => {
        registerUserCall(data);
    }


    return (
        <>
            <StyledParentBox>
                <StyledBox>
                    <StyledTypography>Register Your Store</StyledTypography>
                    <StyledTextField onChange={handleOnChange} name='pharmacyName' type='text' placeholder='Enter Pharmacy name' />
                    <StyledTextField onChange={handleOnChange} name='name' type='text' placeholder='Enter your name' />
                    <StyledTextField onChange={handleOnChange} name='email' type='email' placeholder='Enter your email' />
                    <StyledTextField onChange={handleOnChange} name='phone' type='number' placeholder='Enter your phone number' />
                    <StyledTextField onChange={handleOnChange} name='licenseNumber' type='number' placeholder='Enter Trade License number' />
                    <StyledTextField onChange={handleOnChange} name='password' type='password' placeholder='Enter your password' />
                    <StyledLoginBtn onClick={handleOnRegisterBtnClick}>Register</StyledLoginBtn>
                    <StyledRegisterTypography>Already have an account? <StyledTypographyBtn onClick={handleLoginClick}> Login</StyledTypographyBtn>
                    </StyledRegisterTypography>
                </StyledBox>
            </StyledParentBox>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
                <CircularProgress sx={{ color: "gray" }} />
            </Backdrop>
        </>
    )
}

export default Registration