import Image from 'next/image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
function Slider() {
    return (
        <Carousel autoPlay={true} sx={{ marginTop: 20 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ borderRadius: 20, cursor: 'pointer' }} width={1500} height={500} alt='slider-1' src={'/slider-1.webp'} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ borderRadius: 20, cursor: 'pointer' }} width={1500} height={500} alt='slide-2' src={'/slider-2.webp'} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ borderRadius: 20, cursor: 'pointer' }} width={1500} height={500} alt='slider-3' src={'/slider-3.webp'} />
            </Box>
        </Carousel>
    )
}

export default Slider