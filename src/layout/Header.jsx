import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import styles from './styles/Header.module.css'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const { logoutUser } = useContext(AuthContext)

    return (
        <Box className={styles.header}>
            <Typography className={styles['app-name']}>Fitness Tracker</Typography>
            <button className={styles['log-out']} onClick={logoutUser}>Log Out</button>
        </Box>
    )
}

export default Header