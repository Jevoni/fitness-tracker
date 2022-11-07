import React from 'react'
import { Box } from '@mui/material'

import SidebarCard from '../components/SidebarCard'

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
            <SidebarCard>Summary</SidebarCard>
            <SidebarCard>Weight Training</SidebarCard>
            <SidebarCard>Cardio</SidebarCard>
            <SidebarCard>Supplements</SidebarCard>
        </Box>
    )
}

export default Sidebar