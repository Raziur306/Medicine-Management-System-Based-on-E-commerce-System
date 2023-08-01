'use client'

import React, { useContext, useState } from 'react'
import { StyledBox, StyledLoginBtn, StyledParentBox, StyledRegisterTypography, StyledTextField, StyledTypography, StyledTypographyBtn } from '../styles/registrationStyle'
import { LoginContext } from '../context/LoginContext'

const Registration = () => {
    const { showLogin, setShowLogin, isLoading } = useContext(LoginContext)

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
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

    }


    return (
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
    )
}

export default Registration