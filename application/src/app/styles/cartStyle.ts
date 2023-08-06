import { styled, Box, Select, Button } from "@mui/material";
import Image from "next/image";

export const StyledParentBox = styled(Box)({
    minHeight: 500,
    maxWidth: 500,
    minWidth: 350,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: 10,
    zIndex: 999,
    right: 0,
    boxShadow: '1px 1px 20px black',
    overflow: "hidden",
});

export const StyledCartCardBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between'

});

export const StyledCartImage = styled(Image)({
    borderRadius: 50,
    border: '2px dotted #008069',
    padding: 5,
});


export const StyledCartSelect = styled(Select)({
    height: 30
})

export const StyledCheckoutBtn = styled(Button)({
    margin: 10,
    color: 'white',
    fontWeight: 700,
    background: "#008069",
    ':hover': {
        color: 'white',
        background: '#008069'
    }
});