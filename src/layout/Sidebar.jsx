import React from 'react'
import { Box } from '@mui/material'

import SidebarButton from '../components/SidebarButton'
import ProfilePicture from '../components/ProfilePicture'

import styles from './styles/Sidebar.module.css'

const Sidebar = (display) => {
    return (
        <Box className={styles.sidebar} display={display}>
            <Box className={styles['button-container']}>
                <SidebarButton text='Summary' value='summary' />
                <SidebarButton text='Weight Training' value='weights' />
                <SidebarButton text='Cardio' value='cardio' />
                <SidebarButton text='Supplements' value='supplements' />
            </Box>
            <ProfilePicture />
        </Box>
    )
}

export default Sidebar