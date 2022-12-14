import React from 'react'
import { CiDumbbell } from 'react-icons/ci'
import { BiRun } from 'react-icons/bi'
import { CgPill } from 'react-icons/cg'
import { Box, Typography } from '@mui/material'

import styles from './styles/Summary.module.css'

const SummaryLog = ({ workoutLog, type }) => {

    if (type === 'weight')
        return (
            <Box className={styles['workout-log']}>
                <CiDumbbell size={25} style={{ color: 'orange', marginLeft: '15px' }} />
                <Box className={styles['content-container']}>
                    <Typography sx={{ fontWeight: 325 }}>Date: {workoutLog.date}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Workout: {workoutLog.name}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Reps: {workoutLog.reps}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Sets: {workoutLog.sets}</Typography>
                </Box>
            </Box>
        )

    if (type === 'cardio')
        return (
            <Box className={styles['workout-log']}>
                <BiRun size={25} style={{ color: 'orange', marginLeft: '15px' }} />
                <Box className={styles['content-container']}>
                    <Typography sx={{ fontWeight: 325 }}>Date: {workoutLog.date}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Workout: {workoutLog.name}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Duration: {workoutLog.duration}</Typography>
                </Box>
            </Box>
        )

    if (type === 'supplement')
        return (
            <Box className={styles['workout-log']}>
                <CgPill size={25} style={{ color: 'orange', marginLeft: '15px' }} />
                <Box className={styles['content-container']}>
                    <Typography sx={{ fontWeight: 325 }}>Date: {workoutLog.date}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Supplement: {workoutLog.name}</Typography>
                    <Typography sx={{ fontWeight: 325 }}>Dossage: {workoutLog.dossage}</Typography>
                </Box>
            </Box>
        )
}

export default SummaryLog