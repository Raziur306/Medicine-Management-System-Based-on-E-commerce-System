import { styled, Box, TextField, Typography } from "@mui/material";


export const StyledParentBox = styled(Box)({
    top: 0,
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    background: '#008069',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: 10,
});


export const StyledRowBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left'
});

export const StyledCartBox = styled(Box)({
    padding: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    ':hover': {
        border: '1px solid white',
        borderRadius: 10
    }
});



export const StyledSearchField = styled((TextField))({
    paddingLeft: 10,
    width: '30%',
    borderRadius: 50,
    background: 'white',
    color: 'white',
    '& .MuiInputBase-root': {
        color: 'black',
        border: 'none',
        'fieldset': {
            border: 'none'
        },
        '&:hover fieldset': {
            border: 'none'
        },
        '&.Mui-focused fieldset': {
            border: 'none'
        },
    }
});


export const StyledCartCounterTypography = styled(Typography)({
    background: 'red',
    width: 20,
    height: 20,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: 5,
    position: 'absolute',
    top: 33,
});

export const StyledAccountBox = styled(Box)({
    cursor: "pointer",
    padding: 5,
    borderRadius: 5,
    ':hover': {
        border: '1px solid white',
    }
});