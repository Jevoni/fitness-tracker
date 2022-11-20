import React from 'react'
import { Box } from '@mui/material'

import SidebarButton from '../components/SidebarButton'
import ProfilePicture from '../components/ProfilePicture'

import styles from './styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <Box className={styles.sidebar}>
            <ProfilePicture />
            <SidebarButton text='Summary' value='summary' />
            <SidebarButton text='Weight Training' value='weights' />
            <SidebarButton text='Cardio' value='cardio' />
            <SidebarButton text='Supplements' value='supplements' />
        </Box>
    )
}

export default Sidebar