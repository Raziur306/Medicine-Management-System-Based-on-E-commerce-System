import { styled, Box, TextField } from "@mui/material";


export const StyledParentBox = styled(Box)({
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
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none'
        },
    }
});