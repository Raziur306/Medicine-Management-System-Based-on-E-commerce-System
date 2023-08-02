'use client'
import React from 'react'
import Login from './components/Login'
import { Box, Button, Dialog, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import TableBodyRow from './components/TableBodyRow';

function Home() {
    return (<>
        <Box sx={{ p: 10 }}>
            <Typography sx={{ alignItems: 'center', fontWeight: 'bold', textAlign: 'center' }} variant='h4'>Admin Panel</Typography>
            {/* <Login /> */}
            <Button sx={{ bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'green' } }}>Add New Product</Button>

            <Box>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>All Orders</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>#Order ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>customer name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Total Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18 }}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableBodyRow />
                    </TableBody>
                </Table>
            </Box>
        </Box>
        <Dialog open={true}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography>Add Product Details</Typography>
                    <CloseIcon />
                </Box>
                <TextField sx={{ m: 1 }} placeholder='Product Name' type='text' />
                <TextField sx={{ m: 1 }} placeholder='Product Price' type='number' />
                <TextField sx={{ m: 1 }} placeholder='Quantity' type='number' />
                <TextField sx={{ m: 1 }} placeholder='Image url' type='text' />
                <Button sx={{
                    bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': {
                        bgcolor: 'green'
                    }
                }}>Submit</Button>
            </Box>

        </Dialog>

    </>

    )
}

export default Home