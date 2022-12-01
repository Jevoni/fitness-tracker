import React, { useContext } from 'react'
import { MdFitnessCenter } from 'react-icons/md'
import { Box, Typography } from '@mui/material'

import styles from './styles/Header.module.css'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const { logoutUser, user } = useContext(AuthContext)

    return (
        <Box className={styles.header}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MdFitnessCenter size={25} style={{ marginRight: '15px', color: '2fe3e0', fontWeight: 'bold' }} />
                <Typography sx={{ fontWeight: '550', fontSize: '20px' }} variant='h4'>Fitness Tracker</Typography>
            </Box>
            <button className={`${styles['log-out']} ${!user ? styles.visible : ''}`} onClick={logoutUser}>Log Out</button>
        </Box>
    )
}

export default Header