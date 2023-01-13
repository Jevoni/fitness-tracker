import React, { useContext } from 'react'
import { MdOutlineSummarize } from 'react-icons/md'
import { CiDumbbell } from 'react-icons/ci'
import { BiRun } from 'react-icons/bi'
import { CgPill } from 'react-icons/cg'
import { Box } from '@mui/material'
import AuthContext from '../context/AuthContext'

import SidebarButton from '../components/SidebarButton'
import ProfileButton from '../components/ProfileButton'
import MobileProfileButton from '../components/MobileProfileButton'

import styles from './styles/Sidebar.module.css'

const Sidebar = () => {
    const { user } = useContext(AuthContext)

    return (
        <Box className={styles.sidebar} display={user ? 'flex' : 'none'}>
            <Box className={styles['button-container']}>
                <SidebarButton icon={<MdOutlineSummarize size={30} />} text='Summary' value='summary' />
                <SidebarButton icon={<CiDumbbell size={30} />} text='Weights' value='weights' />
                <SidebarButton icon={<BiRun size={30} />} text='Cardio' value='cardio' />
                <SidebarButton icon={<CgPill size={28} />} text='Supplements' value='supplements' />
                <MobileProfileButton />
            </Box>
            <ProfileButton />
        </Box>
    )
}

export default Sidebar