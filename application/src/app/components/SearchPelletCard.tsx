'user client'
import React, { useContext } from 'react'
import { StyledCartImage } from '../styles/cartStyle'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { UserApiContext } from '../context/UserApiContext'
const SearchPelletCard = ({ id, name, price, url }) => {
    const { searchFilterCall } = useContext(UserApiContext);
    const router = useRouter();

    const handleOnClick = () => {
        searchFilterCall('')
        router.push(`/brand/${id}`);
    }


    return (<>
        <Box onClick={handleOnClick} sx={{ display: 'flex', flexDirection: 'row,', alignItems: 'center', p: 3, cursor: 'pointer' }}>
            <StyledCartImage width={80} height={80} alt='Cart Product' src={url} />
            <Box sx={{ ml: 3 }}>
                <Typography sx={{ fontSize: 15, fontWeight: 'bold' }} variant='subtitle2'>{name}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 15, fontWeight: 700 }} variant='subtitle2'>Price: ৳ {price}</Typography>
                </Box>
            </Box>
        </Box>
    </>
    )
}

export default SearchPelletCard