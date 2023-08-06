'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Image from 'next/image'
import { StyledParentBox, StyledPriceBox, StyledSubBox, StyledSubChildBox, StyledAddCartBtn } from '../../styles/brandStyle';
import { AppBar } from '../../components';
import { UserApiContext } from '../../context/UserApiContext';

type Params = {
    params: {
        productId: String
    }
}
const Brand = ({ params: { productId } }: Params) => {
    const { currentSelectedId, allProducts, addToCart } = useContext(UserApiContext);
    const [data, setData] = useState();

    useEffect(() => {
        allProducts?.forEach((product) => {
            if (product._id == productId) {
                return setData(product);
            }
        })
    }, [allProducts])


    const handleAddCartBtn = () => {
        addToCart(data);
    }


    return (
        <>
            <AppBar />
            <StyledParentBox>
                <StyledSubBox>
                    <Image width={450} height={450} alt='Mask' src={data?.url} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 10, }}>
                        <Typography variant='h6' fontWeight={'bold'}>{data?.name}</Typography>
                        <StyledSubChildBox>
                            <StyledPriceBox>
                                <Typography variant='subtitle2' fontWeight={'bold'} sx={{ mr: 3 }}>Best Price</Typography>
                                <Typography variant='subtitle1' fontWeight={'bold'}>৳ {data?.price}</Typography>
                            </StyledPriceBox>
                            <StyledAddCartBtn onClick={handleAddCartBtn}>Add to cart</StyledAddCartBtn>
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