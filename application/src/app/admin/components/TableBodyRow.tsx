import React from 'react'
import { TableRow, TableCell, Select, MenuItem, Button } from '@mui/material'

function TableBodyRow() {
    return (
        <TableRow>
            <TableCell>000343</TableCell>
            <TableCell>Md Raziur Rahaman</TableCell>
            <TableCell>৳ 100</TableCell>
            <TableCell>
                <Select
                    name='status'
                    displayEmpty
                >
                    <MenuItem value="Cancel">Canceled</MenuItem>
                    <MenuItem value="Confirm">Confirm</MenuItem>
                    <MenuItem value="Delivered">Delivered</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <Button sx={{ bgcolor: 'green', color: 'white', fontWeight: 'bold', ':hover': { bgcolor: 'green' } }}>Update</Button>
            </TableCell>
        </TableRow>
    )
}

export default TableBodyRow