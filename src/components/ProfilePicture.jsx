import React from 'react'
import { Box } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const ProfilePicture = () => {
    return (
        <Box sx={{ height: '150px', width: '150px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Box sx={{ height: '100%', width: '100%', backgroundColor: '#9b59b6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid black' }} >
                <Box component='img' src={DefaultUserPic} height='100px' />
            </Box>
        </Box>
    )
}

export default ProfilePicture