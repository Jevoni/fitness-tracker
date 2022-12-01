import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const ProfilePicture = () => {
    const navigate = useNavigate()

    const buttonClickHandler = () => {
        navigate('/profile')
    }

    return (
        <Button onClick={buttonClickHandler} sx={{ width: '90%', height: '70px', backgroundColor: '#9b59b6', display: 'flex', borderRadius: '3px', marginBottom: '12px', textTransform: 'none', alignItems: 'center', justifyContent: 'flex-start', border: '1px solid black' }}>
            <Box sx={{ height: '45px', width: '60px', display: 'flex', paddingRight: '15px' }}>
                <Box sx={{ height: '100%', width: '100%', backgroundColor: '#dbc3e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
                    <Box component='img' src={DefaultUserPic} height='25px' />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '18px', color: 'white', alignSelf: 'center', justifySelf: 'center' }}>Profile</Typography>
        </Button>
    )
}

export default ProfilePicture