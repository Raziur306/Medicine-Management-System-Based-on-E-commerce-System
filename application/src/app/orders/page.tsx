'use client'
import React, { useContext, useEffect } from 'react'
import { AppBar } from '../components'
import { Box, Grid, Typography } from '@mui/material'
import OrderCard from '../components/OrderCard'
import { UserApiContext } from '../context/UserApiContext'

const Orders = () => {
    const { getMyOrderCall, myOrders } = useContext(UserApiContext);

    useEffect(() => {
        getMyOrderCall();
    }, [])





    return (
        <>
            <AppBar />
            <Box sx={{ mt: 20, p: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {myOrders?.length == 0 && <Typography> No order</Typography>}
                </Box>
                <Grid container justifyContent='center' spacing={2}>
                    {
                        myOrders.map((order, index) => {
                            const { order_id, orderStatus, orderTotal, } = order;
                            return <Grid key={index} item>
                                <OrderCard order_id={order_id} orderStatus={orderStatus} orderTotal={orderTotal} />
                            </Grid>
                        })
                    }

                </Grid>
            </Box >
        </>
    )
}

export default Orders