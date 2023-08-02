import React from 'react'
import { Box, Typography } from '@mui/material'
function OrderCard() {
    return (
        <Box sx={{ maxWidth: 250, boxShadow: '1px 1px 10px black', p: 2, borderRadius: 5, cursor: 'pointer' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Order ID</Typography>
                <Typography>#12323</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Date</Typography>
                <Typography>12/07/2023, 12:34AM</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Status</Typography>
                <Typography>Delivered</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography fontWeight={'bold'}>Amount Payable</Typography>
                <Typography>Delivered</Typography>
            </Box>

        </Box>


    )
}

export default OrderCard