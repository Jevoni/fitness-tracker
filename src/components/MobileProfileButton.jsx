import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const MobileProfileButton = () => {
    const navigate = useNavigate()

    const buttonClickHandler = () => {
        navigate('/profile')
    }

    return (
        <Button onClick={buttonClickHandler}
            sx={{
                margin: '6px',
                marginLeft: { xs: '2px', sm: '5px', md: '12px' }, marginRight: { xs: '2px', sm: '5px', md: '12px' },
                width: '100%',
                height: '70px',
                backgroundColor: '#9b59b6',
                display: { lg: 'none' },
                borderRadius: '3px',
                textTransform: 'none',
                alignItems: 'center',
                justifyContent: 'flex-start',
                border: '1px solid black',
                flexDirection: { xs: 'column', lg: 'row' }
            }}>
            <Box
                sx={{
                    height: '35px',
                    width: '35px',
                    display: 'flex',
                    marginBottom: '3px'
                }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#dbc3e4',
                        borderRadius: '50%',
                        isplay: 'flex',
                        lignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid black'
                    }}>
                    <Box component='img' src={DefaultUserPic} height='20px' marginTop='5px' />
                </Box>
            </Box>
            <Typography sx={{ fontSize: { xs: '11px', md: '16.5px' }, color: 'white', alignSelf: 'center', justifySelf: 'center' }}>Profile</Typography>
        </Button>
    )
}

export default MobileProfileButton