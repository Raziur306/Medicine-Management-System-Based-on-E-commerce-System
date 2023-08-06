import React from 'react'
import { Box, Typography } from '@mui/material'
function OrderCard({ order_id, orderStatus, orderTotal }) {

    const date = new Date(order_id);
    const dateFormat = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    const color = orderStatus == 'Pending' ? '#fcba03' : (orderStatus == 'Delivered' ? 'green' : 'gray');


    return (
        <Box sx={{ minWidth: 300, minHeight: 200, boxShadow: '1px 1px 10px black', p: 2, borderRadius: 5, cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Order ID</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>#{order_id}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Date</Typography>
                <Typography>{dateFormat}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Status</Typography>
                <Typography sx={{ bgcolor: color, p: 1, borderRadius: 10, fontWeight: 'bold', color: 'white' }}>{orderStatus}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography fontWeight={'bold'}>Amount Payable</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>৳ {orderTotal}</Typography>
            </Box>

        </Box>


    )
}

export default OrderCard