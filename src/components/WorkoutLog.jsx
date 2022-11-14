import React from 'react'
import { Box, Typography } from '@mui/material'

const WorkoutLog = () => {
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
            <Typography>Workout: <input type='text'></input></Typography>
            <Typography>Reps: <input type='number'></input></Typography>
            <Typography>Sets: <input type='number'></input></Typography>
            <button style={{ backgroundColor: 'lightgreen' }}>ADD</button>
        </Box>
    )
}

export default WorkoutLog