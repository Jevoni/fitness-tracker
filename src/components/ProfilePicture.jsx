import React from 'react'
import { Box } from '@mui/material'

import DefaultUserPic from '../media/user.png'

const ProfilePicture = () => {
    return (
        <Box sx={{ height: '180px', width: '180px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Box sx={{ height: '100%', width: '100%', backgroundColor: '#9b59b6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Box component='img' src={DefaultUserPic} height='130px' />
            </Box>
        </Box>
    )
}

export default ProfilePicture