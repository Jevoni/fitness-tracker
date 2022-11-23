import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './styles/Supplements.module.css'

const SupplementsInput = () => {
    return (
        <Box className={styles['supplements-log']}>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Supplement: <input type='text'></input></Typography>
            <Typography>Dossage: <input type='text'></input></Typography>
            <Button className={styles['button-add']}>Add</Button>
        </Box>
    )
}

export default SupplementsInput