'use client'
import React, { useState, useContext } from 'react'
import { TableRow, TableCell, Select, MenuItem, Button } from '@mui/material'
import { AdminApiContext } from '@/app/context/AdminApiContext';

function TableBodyRow({ serverId, orderId, orderStatus, orderTotal, paymentMethod, shippingAddress }) {
    const { updateOrderStatusCall } = useContext(AdminApiContext);

    const [orderState, setOrderState] = useState(orderStatus);

    const handleOnUpdate = () => {
        updateOrderStatusCall(serverId, orderState)
    }

    const handleOrderSateChange = (e) => {
        setOrderState(e.target.value);
    }

    return (
        <TableRow>
            <TableCell sx={{ fontSize: 18 }}>{orderId}</TableCell>
            <TableCell sx={{ fontSize: 18 }}>{paymentMethod}</TableCell>
            <TableCell sx={{ fontSize: 18 }}>৳ {orderTotal}</TableCell>
            <TableCell sx={{ fontSize: 18 }}>{shippingAddress}</TableCell>
            <TableCell>
                <Select
                    name='status'
                    value={orderState}
                    onChange={handleOrderSateChange}
                    displayEmpty
                >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Cancel">Canceled</MenuItem>
                    <MenuItem value="Delivered">Delivered</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <Button onClick={handleOnUpdate} sx={{ bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'green' } }}>Update</Button>
            </TableCell>
        </TableRow>
    )
}

export default TableBodyRow