import { Typography, TextField, InputAdornment, Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { StyledParentBox, StyledRowBox, StyledCartBox, StyledSearchField } from '../styles/appBarStyle';



const AppBar = () => {
    return (
        <StyledParentBox>
            <Box sx={{ cursor: 'pointer' }}>
                <Image width={100} height={80} alt='Website Logo' src={"/logo.png"} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <Typography variant='subtitle2'>Deliver to</Typography>
                <StyledRowBox>
                    <LocationOnOutlinedIcon />
                    <Typography>Bangladesh</Typography>
                </StyledRowBox>
            </Box>
            <StyledSearchField placeholder='Search Items...' InputProps={{
                endAdornment: <InputAdornment position='end'>
                    <SearchOutlinedIcon />
                </InputAdornment>
            }} />

            <Box>
                <Typography variant='h6'>Hello, User</Typography>
                <Typography variant='subtitle2'>Place your order</Typography>
            </Box>
            <StyledCartBox>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 50 }} />
                <Typography variant='subtitle2'>Cart</Typography>
            </StyledCartBox>
        </StyledParentBox>
    )
}

export default AppBar