'use client'
import React, { useContext, useState } from 'react'
import { StyledBox, StyledLoginBtn, StyledParentBox, StyledRegisterTypography, StyledTextField, StyledTypography, StyledTypographyBtn } from '../../styles/loginStyle'
import { AdminApiContext } from '@/app/context/AdminApiContext';

const Login = () => {
    const { loginCall } = useContext(AdminApiContext);
    const [data, setData] = useState({
        userName: "",
        password: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleLoginClick = () => {
        loginCall(data);
    }



    return (
        <StyledParentBox>
            <StyledBox>
                <StyledTypography>Admin Login</StyledTypography>
                <StyledTextField onChange={handleOnChange} name='userName' type='text' placeholder='Enter your username' />
                <StyledTextField onChange={handleOnChange} name='password' type='password' placeholder='Enter your password' />
                <StyledLoginBtn onClick={handleLoginClick} >Login</StyledLoginBtn>
            </StyledBox>
        </StyledParentBox >
    )
}

export default Login