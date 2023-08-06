import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, Select, Button, Dialog, TextField, Radio } from '@mui/material'
import { StyledCartCardBox, StyledParentBox, StyledCartImage, StyledCartSelect, StyledCheckoutBtn } from '../styles/cartStyle'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';
import { CartProductCard } from '.';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import { UserApiContext } from '../context/UserApiContext';
const Cart = () => {
    const { cartProductList, setCartProductList, allProducts, isCartVisible, setIsCartVisible } = useContext(UserApiContext);
    const deliveryCharge = 100;
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = 0;
        cartProductList.forEach((product) => {
            price += product?.price;
        })
        setTotalPrice(price);
    }, [cartProductList])


    const handleCartCloseClick = () => {
        setIsCartVisible(false);
    }

    const handleAddressChangeBtn = () => {

    }

    const handleAddressDialogClose = () => {


    }

    const handleAddressDialogSave = () => {

    }

    const handlePaymentDialogClose = () => {

    }




    return (<>

        {isCartVisible && <>
            <StyledParentBox>
                <Box sx={{ color: 'white', bgcolor: "#008069", p: 1, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'center' }}>Please be sure before placing order</Typography>
                    <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleCartCloseClick} />
                </Box>

                <Box sx={{ overflowY: 'scroll' }}>
                    {
                        cartProductList.map((product, index) => {
                            const { id, name, price, url, quantity } = product
                            return <CartProductCard id={id} name={name} price={price} url={url} quantity={quantity} key={index} />
                        })
                    }


                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
                        <PinDropOutlinedIcon sx={{ color: '#008069', fontSize: 30 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', color: '#008069', ml: 2 }}>
                            <Typography sx={{ fontSize: '12px' }}>Ronju</Typography>
                            <Typography sx={{ fontSize: '12px' }}>+8801737956676</Typography>
                            <Typography sx={{ fontSize: '12px' }}>House 6, Road 12, Sector 10, Dhaka 1230</Typography>
                        </Box>
                        <Button onClick={handleAddressChangeBtn}>Change</Button>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                        <Typography>Subtotal: </Typography>
                        <Typography>৳ {totalPrice}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                        <Typography>Delivery Charge: </Typography>
                        <Typography>৳ {deliveryCharge}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 2, pr: 2 }}>
                        <Typography>Total: </Typography>
                        <Typography>৳ {totalPrice + deliveryCharge}</Typography>
                    </Box>

                    <StyledCheckoutBtn>Process to checkout</StyledCheckoutBtn>
                </Box>
            </StyledParentBox >
            <Dialog open={false}>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 5, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}>
                        <Typography>Add Shipping Address</Typography>
                        <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleAddressDialogClose} />
                    </Box>
                    <TextField sx={{ mb: 1 }} name='name' id="outlined-basic" label="Name *" variant="outlined" type='text' />
                    <TextField sx={{ mb: 1 }} name='name' id="outlined-basic" label="Phone number *" variant="outlined" type='number' />
                    <TextField sx={{ mb: 1 }} name='name' id="outlined-basic" label="Full Address *" variant="outlined" type='text' />
                    <StyledCheckoutBtn onClick={handleAddressDialogSave}>Save Address</StyledCheckoutBtn>
                </Box>
            </Dialog>


            <Dialog open={false}>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 5, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant='h6' fontWeight={'bold'}>Checkout</Typography>
                        <CloseIcon sx={{ cursor: 'pointer' }} onClick={handlePaymentDialogClose} />
                    </Box >
                    <Box sx={{ border: '1px solid #10837d26', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: '#10837d26', p: 0.5, borderRadius: 1.5, justifyContent: 'space-between' }}>
                            <Typography>To be paid</Typography>
                            <Typography>৳ 133</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
                            <Radio />
                            <Image width={250} height={70} alt='COD Payment' src={'/cod_icon.webp'} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
                            <Radio />
                            <Image width={250} height={70} alt='COD Payment' src={'/cards_icon.webp'} />
                        </Box>

                    </Box>
                    <StyledCheckoutBtn>Process Order</StyledCheckoutBtn>
                </Box>

            </Dialog>
        </>
        }
    </>
    )
}

export default Cart