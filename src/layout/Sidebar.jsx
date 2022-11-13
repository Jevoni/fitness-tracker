import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import SidebarButton from '../components/SidebarButton'
import ProfilePicture from '../components/ProfilePicture'

const Sidebar = () => {
    const navigate = useNavigate()
    const buttonClickHandler = () => {
        navigate(`/weights`)
        console.log('Clicked')
    }
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
            <SidebarButton clickHandler={buttonClickHandler}>Summary</SidebarButton>
            <SidebarButton>Weight Training</SidebarButton>
            <SidebarButton>Cardio</SidebarButton>
            <SidebarButton>Supplements</SidebarButton>
        </Box>
    )
}

export default Sidebar