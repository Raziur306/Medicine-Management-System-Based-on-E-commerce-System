"user client"
import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { StyledParentBox } from '../styles/searchPelletStyle'
import { SearchPelletCard } from '.'
import { UserApiContext } from '../context/UserApiContext'


const SearchPellet = () => {
    const { filteredProduct } = useContext(UserApiContext)
    return (
        <>
            {filteredProduct.length != 0 &&
                <>
                    <StyledParentBox>
                        {
                            filteredProduct.map((product, index) => {
                                const { _id, name, price,url } = product;
                                return <SearchPelletCard url={url} id={_id} name={name} price={price} key={index} />
                            })
                        }
                    </StyledParentBox>
                </>
            }
        </>
    )
}

export default SearchPellet