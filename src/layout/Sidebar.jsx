import React from 'react'
import { Box } from '@mui/material'

import SidebarButton from '../components/SidebarButton'
import ProfilePicture from '../components/ProfilePicture'

const Sidebar = () => {
    return (
        <Box sx={{
            width: '15%',
            minHeight: '100vh',
            backgroundColor: '#dbc3e4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <ProfilePicture />
            <SidebarButton text={`Summary`} value={``} />
            <SidebarButton text={`Weight Training`} value={`weights`} />
            <SidebarButton text={`Cardio`} value={`cardio`} />
            <SidebarButton text={`Supplements`} value={`supplements`} />
        </Box>
    )
}

export default Sidebar