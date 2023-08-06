'use client'
import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Login'
import { Box, Button, Dialog, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import TableBodyRow from './components/TableBodyRow';
import { AdminApiContext } from '../context/AdminApiContext';
import AdminControl from './components/AdminControl';

const Home = () => {
    const { isLoggedIn } = useContext(AdminApiContext)
    const [adminStatus, setAdminStatus] = useState<Boolean>();

    useEffect(() => {
        const data = localStorage.getItem("adminToken");
        if (data) {
            setAdminStatus(true);
        } else {
            setAdminStatus(false);
        }
    })

    if (adminStatus == undefined) {
        return <>

        </>
    }

    return (
        <>
            {!isLoggedIn && !adminStatus && <Login />}
            {adminStatus && <AdminControl />}
        </>


    )
}

export default Home