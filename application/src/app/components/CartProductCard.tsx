import React, { useContext } from 'react'
import { styled, Box, Select, MenuItem, Typography } from "@mui/material";
import { StyledCartCardBox, StyledParentBox, StyledCartImage, StyledCartSelect } from '../styles/cartStyle'
import ClearIcon from '@mui/icons-material/Clear';
import { UserApiContext } from '../context/UserApiContext';



const CartProductCard = ({ id, name, price, url, quantity }) => {
    const { removeFromCart } = useContext(UserApiContext);

    const handleRemoveClick = () => {
        removeFromCart(id)
    }

    return (
        <StyledCartCardBox>
            <StyledCartImage width={80} height={80} alt='Cart Product' src={url} />
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", mb: 1 }}>
                    <Typography sx={{ fontSize: 12 }} variant='subtitle2'>{name}</Typography>
                    <ClearIcon onClick={handleRemoveClick} sx={{ cursor: 'pointer' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 12 }} variant='subtitle2'>Delivery within 7 days</Typography>
                    <StyledCartSelect
                        name='cartItem'
                        value={quantity}
                        displayEmpty
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </StyledCartSelect>
                </Box>
            </Box>
        </StyledCartCardBox >
    )
}

export default CartProductCard