'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Image from 'next/image'
import { StyledParentBox, StyledPriceBox, StyledSubBox, StyledSubChildBox, StyledAddCartBtn } from '../styles/brandStyle';
import { AppBar } from '../components';

const Brand = () => {
    return (
        <>
            <AppBar />
            <StyledParentBox>
                <StyledSubBox>
                    <Image width={450} height={450} alt='Mask Image' src={'/mask.webp'} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 10, }}>
                        <Typography variant='h6' fontWeight={'bold'}>KN95 Face Mask 5 Layers Protection</Typography>
                        <StyledSubChildBox>
                            <StyledPriceBox>
                                <Typography variant='subtitle2' fontWeight={'bold'} sx={{ mr: 3 }}>Best Price</Typography>
                                <Typography variant='subtitle1' fontWeight={'bold'}>৳22.00</Typography>
                            </StyledPriceBox>
                            <StyledAddCartBtn>Add to cart</StyledAddCartBtn>
                        </StyledSubChildBox>
                    </Box>
                </StyledSubBox>
                <Typography sx={{ m: 5, fontWeight: 700 }}>সারা বাংলাদেশ থেকে অর্ডার করা যাবে।</Typography>
                <Box sx={{ mt: 5, mb: 5 }}>
                    <DescriptionOutlinedIcon sx={{ color: 'red' }} />
                    <Typography>Disclaimer</Typography>
                </Box>
                <Typography variant='subtitle2'>
                    The information provided herein is accurate, updated and complete as per the best practices of the Company. Please note that this information should not be treated as a replacement for physical medical consultation or advice. We do not guarantee the accuracy and the completeness of the information so provided. The absence of any information and/or warning to any drug shall not be considered and assumed as an implied assurance of the Company. We do not take any responsibility for the consequences arising out of the aforementioned information and strongly recommend you for a physical consultation in case of any queries or doubts.
                </Typography>
            </StyledParentBox >
        </>
    )

}

export default Brand