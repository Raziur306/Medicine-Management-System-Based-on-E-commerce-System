import { Box, styled, Button } from "@mui/material";

export const StyledParentBox = styled(Box)({
    maxWidth: '70%',
    margin: 'auto',
    marginTop: 150,
});

export const StyledSubBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginStart: 15,
    alignItems: 'center',
});

export const StyledSubChildBox = styled(Box)({
    marginTop: 20,
    background: '#B2EAC3',
    width: 500,
    padding: 30,
    border: '1px solid gray',
    borderRadius: 15,

});

export const StyledPriceBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
});

export const StyledAddCartBtn = styled(Button)({
    background: '#008069',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    marginTop: 5,
    ':hover': {
        background: '#008069',
        color: 'white',
    }
});