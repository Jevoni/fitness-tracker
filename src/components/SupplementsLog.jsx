import React from 'react'
import { Box, Typography } from '@mui/material'

const SupplementsLog = () => {
    return (
        <Box className={styles['supplements-log']}>
            <Button className={styles['button-remove']}>Remove</Button>
            <Button className={styles['button-edit']}>Edit</Button>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Supplement: <input type='text'></input></Typography>
            <Typography>Dossage: <input type='text'></input></Typography>
        </Box>
    )
}

export default SupplementsLog