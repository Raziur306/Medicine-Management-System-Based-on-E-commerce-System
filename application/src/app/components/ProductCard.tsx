import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import { StyledAddCartBtn, StyledCardBox, StyledImage } from '../styles/productCardStyle'

const ProductCard = () => {
    return (
        <StyledCardBox>
            <Box sx={{ maxWidth: '300px', maxHeight: '300px', overflow: 'hidden' }}>
                <StyledImage className='productCardImg' width={150} height={150} alt='Product' src={'/mask.webp'} />
            </Box>
            <Typography>KN95 Face Mask 5 Layers Pro</Typography>
            <Typography>৳25</Typography>
            <StyledAddCartBtn>Add to Cart</StyledAddCartBtn>
        </StyledCardBox>
    )
}

export default ProductCard