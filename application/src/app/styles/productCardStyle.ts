import { Box, styled, Button } from "@mui/material";
import Image from 'next/image'

export const StyledCardBox = styled(Box)({
    maxWidth: 250,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 5,
    ':hover': {
        boxShadow: '1px 1px 11px black',
        cursor: 'pointer',
        '& .productCardImg': {
            transform: 'scale(1.1)'
        }
    }
});

export const StyledImage = styled(Image)({
    marginBottom: 8,
    transition: 'transform .2s',
});

export const StyledAddCartBtn = styled(Button)({
    fontWeight: 'bold',
    color: 'black',
    border: '1px solid #008069',
    ':hover': {
        background: '#008069',
        color: 'white'
    }
});