import React from 'react'
import { Box, Typography, Select, Button } from '@mui/material'
import { StyledCartCardBox, StyledParentBox, StyledCartImage, StyledCartSelect, StyledCheckoutBtn } from '../styles/cartStyle'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';
import { CartProductCard } from '.';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
const Cart = () => {
    return (
        <StyledParentBox>
            <Box sx={{ color: 'white', bgcolor: "#008069", p: 1, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography sx={{ textAlign: 'center' }}>Please be sure before placing order</Typography>
                <CloseIcon />
            </Box>

            <CartProductCard />
            <CartProductCard />
            <CartProductCard />

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
                <PinDropOutlinedIcon />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='subtitle2'>Ronju</Typography>
                    <Typography variant='subtitle2'>+8801737956676</Typography>
                    <Typography variant='subtitle2'>House 6, Road 12, Sector 10, Dhaka 1230</Typography>
                </Box>
                <Button>Change</Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                <Typography>Subtotal: </Typography>
                <Typography>৳ 10</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                <Typography>Delivery Charge: </Typography>
                <Typography>৳ 100</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                <Typography>Total: </Typography>
                <Typography>৳ 110</Typography>
            </Box>

            <StyledCheckoutBtn>Process to checkout</StyledCheckoutBtn>

        </StyledParentBox >
    )
}

export default Cart