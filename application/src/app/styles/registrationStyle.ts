'use client'

import { TextField, Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const StyledParentBox = styled(Box)({
    with: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',

});

export const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '22%',
    margin: 'auto',
    padding: 10,
    boxShadow: "0px 0px 8px black",
    borderRadius: 10
});

export const StyledTypography = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontsize: 25,
    margin: 10,
});

export const StyledTextField = styled(TextField)({
    margin: 5
});


export const StyledRegisterTypography = styled(Typography)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    padding: 15
});

export const StyledTypographyBtn = styled(Typography)({
    marginLeft: 5,
    cursor: 'pointer',
    ':hover': {
        color: 'blue'
    }
});

export const StyledLoginBtn = styled(Button)({
    border: "none",
    background: 'rgb(27, 204, 80)',
    margin: 5,
    color: 'white',
    padding: 10,
    fontSize: 16,
    ':hover': {
        color: 'white',
        background: 'rgb(67, 196, 106)'
    }
});