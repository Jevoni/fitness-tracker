import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const ProfileButton = () => {
    const navigate = useNavigate()

    const buttonClickHandler = () => {
        navigate('/profile')
    }

    return (
        <Button onClick={buttonClickHandler} sx={{ width: { xs: '30%', lg: '90%' }, height: '70px', backgroundColor: '#9b59b6', display: { xs: 'none', lg: 'flex' }, borderRadius: '3px', marginBottom: { xs: '0px', lg: '12px' }, textTransform: 'none', alignItems: 'center', justifyContent: 'flex-start', border: '1px solid black', flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '35px', width: '50px', display: 'flex', paddingRight: '15px' }}>
                <Box sx={{ height: '100%', width: '100%', backgroundColor: '#dbc3e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
                    <Box component='img' src={DefaultUserPic} height='20px' />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '16.5px', color: 'white', alignSelf: 'center', justifySelf: 'center' }}>Profile</Typography>
        </Button>
    )
}

export default ProfileButton