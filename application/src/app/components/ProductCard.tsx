'use client'
import React, { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import { StyledAddCartBtn, StyledCardBox, StyledImage } from '../styles/productCardStyle'
import { useRouter } from 'next/navigation'
import { UserApiContext } from '../context/UserApiContext'

const ProductCard = ({ id, name, price, url }) => {

    const router = useRouter();

    const handleOnProductClick = () => {
        router.push(`/brand/${id}`);
    }


    return (
        <StyledCardBox onClick={handleOnProductClick}>
            <Box sx={{ maxWidth: '300px', maxHeight: '300px', overflow: 'hidden' }}>
                <StyledImage className='productCardImg' width={150} height={150} alt='Product' src={url} />
            </Box>
            <Typography>{name}</Typography>
            <Typography>৳{price}</Typography>
            <StyledAddCartBtn>Add to Cart</StyledAddCartBtn>
            {/* Add rating */}
        </StyledCardBox>
    )
}

export default ProductCard