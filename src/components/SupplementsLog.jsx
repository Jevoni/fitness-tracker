import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const SupplementsLog = () => {
    return (
        <Box sx={{
            height: '40px',
            margin: '10px',
            backgroundColor: 'white',
            border: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px'
        }}>
            <Typography>Date: <input type='date'></input></Typography>
            <Typography>Supplement: <input type='text'></input></Typography>
            <Typography>Dossage: <input type='text'></input></Typography>
            <Button style={{ backgroundColor: 'lightgreen', border: '1px solid black', color: 'black', padding: '2px' }}>ADD</Button>
        </Box>
    )
}

export default SupplementsLog