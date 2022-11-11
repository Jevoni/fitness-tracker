import React from 'react'
import { Box } from '@mui/material'

import SidebarCard from '../components/SidebarCard'
import ProfilePicture from '../components/ProfilePicture'

const Sidebar = () => {
    return (
        <Box sx={{
            width: '12%',
            minHeight: '100vh',
            backgroundColor: '#dbc3e4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <ProfilePicture />
            <SidebarCard>Summary</SidebarCard>
            <SidebarCard>Weight Training</SidebarCard>
            <SidebarCard>Cardio</SidebarCard>
            <SidebarCard>Supplements</SidebarCard>
        </Box>
    )
}

export default Sidebar