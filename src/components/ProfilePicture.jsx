import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const ProfilePicture = () => {
    return (
        <Button sx={{ width: '90%', height: '70px', backgroundColor: '#9b59b6', display: 'flex', borderRadius: '3px', marginBottom: '12px', textTransform: 'none', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Box sx={{ height: '55px', width: '55px', display: 'flex', marginTop: '10px', margin: '6px', }}>
                <Box sx={{ height: '100%', width: '100%', backgroundColor: '#dbc3e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
                    <Box component='img' src={DefaultUserPic} height='35px' />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '18px', color: 'white', alignSelf: 'center', justifySelf: 'center' }}>Profile</Typography>
        </Button>
    )
}

export default ProfilePicture