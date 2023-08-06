import { Grid, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { ProductCard } from '.'
import { UserApiContext } from '../context/UserApiContext'

const Products = () => {
    const { allProducts } = useContext(UserApiContext)

    return (
        <Grid container spacing={5} justifyContent={'center'} sx={{ marginTop: 3 }}>
            {
                allProducts?.map((product, index: number) => {
                    const { _id, name, price, url } = product;
                    return <Grid key={index} item>
                        <ProductCard id={_id} name={name} price={price} url={url} />
                    </Grid>
                })

            }

            {
                !allProducts && <Typography>No product available</Typography>
            }


        </Grid>
    )
}

export default Products