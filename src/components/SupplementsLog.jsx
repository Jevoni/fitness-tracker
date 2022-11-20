import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/SupplementsLog.module.css'

const SupplementsLog = () => {
    return (
        <Box className={styles['supplements-log']}>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Supplement: <input type='text'></input></Typography>
            <Typography>Dossage: <input type='text'></input></Typography>
            <Button className={styles['button']}>ADD</Button>
        </Box>
    )
}

export default SupplementsLog