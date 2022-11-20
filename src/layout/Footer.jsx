import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles/Footer.module.css'

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Typography variant='h6'>Footer</Typography>
        </Box>
    )
}

export default Footer