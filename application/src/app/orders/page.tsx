'use client'
import React from 'react'
import { AppBar } from '../components'
import { Box, Grid, Typography } from '@mui/material'
import OrderCard from '../components/OrderCard'

function Orders() {
    return (
        <>
            <AppBar />
            <Box sx={{ mt: 20, p: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography>No order</Typography>
                </Box>
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item>
                        <OrderCard />
                    </Grid>
                    <Grid item>
                        <OrderCard />
                    </Grid>
                    <Grid item>
                        <OrderCard />
                    </Grid>
                    <Grid item>
                        <OrderCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Orders