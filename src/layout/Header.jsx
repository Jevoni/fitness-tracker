import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles/Header.module.css'
import AuthContext from '../context/AuthContext'

const Header = (display) => {
    const { logoutUser } = useContext(AuthContext)

    return (
        <Box className={styles.header} display={display}>
            <Typography className={styles['app-name']}>Fitness Tracker</Typography>
            <button className={styles['log-out']} onClick={logoutUser}>Log Out</button>
        </Box>
    )
}

export default Header