'use client'
import React, { useState, useContext, useEffect } from 'react'
import { Box, Button, Dialog, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import TableBodyRow from './TableBodyRow';
import { AdminApiContext } from '@/app/context/AdminApiContext';
const AdminControl = () => {
    const { addNewProductCall, updateOrderStatusCall, allOrders, setIsLoggedIn } = useContext(AdminApiContext)
    const [addNewProductDialog, setAddNewProductDialog] = useState(false);
    const [newProductData, setNewProductData] = useState({
        name: "",
        price: null,
        quantity: null,
        url: ""
    })



    const handleAddNewProductDialog = () => {
        setAddNewProductDialog(!addNewProductDialog);
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewProductData({
            ...newProductData,
            [name]: value
        })
    }

    const handleSubmitBtn = () => {
        addNewProductCall(newProductData)
        setAddNewProductDialog(false);
    }

    const handleAdminLogoutClick = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('adminToken');
    }

    return (<>
        <Box sx={{ p: 10 }}>
            <Typography sx={{ alignItems: 'center', fontWeight: 'bold', textAlign: 'center' }} variant='h4'>Admin Panel</Typography>

            <Button onClick={handleAddNewProductDialog} sx={{ bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'green' } }}>Add New Product</Button>
            <Typography sx={{ display: 'flex', textAlignment: 'right', justifyContent: 'right', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleAdminLogoutClick}>Logout</Typography>
            <Box>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>All Orders</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>#Order ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Payment Method</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Total Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Shipping Address</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders?.map((order, index) => {
                                const { _id, order_id, orderStatus, orderTotal, paymentMethod, shippingAddress } = order;
                                return <TableBodyRow serverId={_id} orderId={order_id} orderStatus={orderStatus} orderTotal={orderTotal} paymentMethod={paymentMethod} shippingAddress={shippingAddress} key={index} />
                            })

                        }

                    </TableBody>
                </Table>
            </Box>
        </Box>
        <Dialog open={addNewProductDialog}>
            <Box sx={{ minWidth: 500, display: 'flex', flexDirection: 'column', p: 1, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='h5'>Add Product Details</Typography>
                    <CloseIcon onClick={handleAddNewProductDialog} sx={{ cursor: 'pointer' }} />
                </Box>
                <TextField sx={{ m: 1 }} onChange={handleOnChange} name='name' placeholder='Product Name' type='text' />
                <TextField sx={{ m: 1 }} onChange={handleOnChange} name='price' placeholder='Product Price' type='number' />
                <TextField sx={{ m: 1 }} onChange={handleOnChange} name='quantity' placeholder='Quantity' type='number' />
                <TextField sx={{ m: 1 }} onChange={handleOnChange} name='url' placeholder='Image url' type='text' />
                {/* New Text Box */}

                <Button sx={{
                    bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': {
                        bgcolor: 'green'
                    }

                }} onClick={handleSubmitBtn}>Submit</Button>
            </Box>

        </Dialog>

    </>
    )
}

export default AdminControl