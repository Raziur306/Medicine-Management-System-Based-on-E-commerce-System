'use client'
import React, { useContext, useState } from 'react'
import { StyledBox, StyledLoginBtn, StyledParentBox, StyledRegisterTypography, StyledTextField, StyledTypography, StyledTypographyBtn } from '../styles/loginStyle'
import { UserApiContext } from '../context/UserApiContext'
function Login() {
    const { showLogin, setShowLogin, isLoading, loginCall } = useContext(UserApiContext)

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleOnRegisterClick = () => {
        setShowLogin(!showLogin);
    }

    const handleOnLoginBtnClick = () => {
        loginCall(data)
    }


    return (
        <StyledParentBox>
            <StyledBox>
                <StyledTypography>Please Login</StyledTypography>
                <StyledTextField onChange={handleOnChange} name='email' type='email' placeholder='Enter your email' />
                <StyledTextField onChange={handleOnChange} name='password' type='password' placeholder='Enter your password' />
                <StyledLoginBtn onClick={handleOnLoginBtnClick}>Login</StyledLoginBtn>
                <StyledRegisterTypography>Don&apos;t have account? <StyledTypographyBtn onClick={handleOnRegisterClick}> Register</StyledTypographyBtn>
                </StyledRegisterTypography>
            </StyledBox>
        </StyledParentBox>
    )
}

export default Login