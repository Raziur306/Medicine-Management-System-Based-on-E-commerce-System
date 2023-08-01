import React from 'react'
import { styled, Box, Select, MenuItem, Typography } from "@mui/material";
import { StyledCartCardBox, StyledParentBox, StyledCartImage, StyledCartSelect } from '../styles/cartStyle'
import ClearIcon from '@mui/icons-material/Clear';



const CartProductCard = () => {
    return (
        <StyledCartCardBox>
            <StyledCartImage width={80} height={80} alt='Cart Product' src={'/mask.webp'} />
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                    <Typography sx={{ fontSize: 12 }} variant='subtitle2'>KN95 Face Mask 5 Layers Protection</Typography>
                    <ClearIcon sx={{ cursor: 'pointer' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 12 }} variant='subtitle2'>Delivery within 7 days</Typography>
                    <StyledCartSelect
                        name='cartItem'
                        displayEmpty
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </StyledCartSelect>
                </Box>
            </Box>
        </StyledCartCardBox>
    )
}

export default CartProductCard