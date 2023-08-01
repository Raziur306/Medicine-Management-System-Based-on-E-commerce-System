import { Grid } from '@mui/material'
import React from 'react'
import { ProductCard } from '.'

const Products = () => {
    return (
        <Grid container spacing={5} justifyContent={'center'} sx={{ marginTop: 3 }}>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>
            <Grid item>
                <ProductCard />
            </Grid>

        </Grid>
    )
}

export default Products