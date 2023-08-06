import { Typography, TextField, InputAdornment, Box } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { StyledParentBox, StyledRowBox, StyledCartBox, StyledSearchField, StyledCartCounterTypography, StyledAccountBox } from '../styles/appBarStyle';
import { Cart, SearchPellet } from '.';
import { useRouter } from 'next/navigation';
import CategoryIcon from '@mui/icons-material/Category';
import { UserApiContext } from '../context/UserApiContext';

const AppBar = () => {
    const { isCartVisible, setIsCartVisible, cartProductList, searchFilterCall, isLoggedIn, setIsLoggedIn } = useContext(UserApiContext);
    const router = useRouter();

    const handleOnCartClick = () => {
        setIsCartVisible(!isCartVisible)
    }

    const handleOrderClick = () => {
        router.push('/orders')
    }

    const handleOnLogoClick = () => {
        router.push('/')
    }

    const onChange = (e) => {
        const { value } = e.target;
        searchFilterCall(value);
    }

    const handleOnLogoutClick = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('userData')
    }


    return (
        <>
            <StyledParentBox>
                <Box sx={{ cursor: 'pointer' }} onClick={handleOnLogoClick}>
                    <Image width={100} height={80} alt='Website Logo' src={"/logo.png"} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                    <Typography variant='subtitle2'>Deliver to</Typography>
                    <StyledRowBox>
                        <LocationOnOutlinedIcon />
                        <Typography>Bangladesh</Typography>
                    </StyledRowBox>
                </Box>
                <StyledSearchField onChange={onChange} placeholder='Search Items...' InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        <SearchOutlinedIcon />
                    </InputAdornment>
                }} />
                <SearchPellet />
                <Box sx={{ cursor: "pointer", justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleOrderClick}>
                    <CategoryIcon />
                    <Typography variant='subtitle2'>Orders</Typography>
                </Box>

                <StyledAccountBox >
                    <Typography variant='h6'>Hello, User</Typography>
                    <Typography variant='subtitle2'>Place your order</Typography>
                </StyledAccountBox>
                <StyledCartBox onClick={handleOnCartClick}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 50 }} />
                    <StyledCartCounterTypography variant='subtitle2'>{cartProductList.length}</StyledCartCounterTypography>
                    <Typography variant='subtitle2'>Cart</Typography>
                </StyledCartBox>
                <Typography sx={{ mr: 3, cursor: 'pointer' }} onClick={handleOnLogoutClick}>Logout</Typography>
            </StyledParentBox>

            <Cart />
        </>
    )
}

export default AppBar