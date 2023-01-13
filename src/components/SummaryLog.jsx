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
                <CiDumbbell size={25} className={styles.icon} />
                <Box className={styles['content-container']}>
                    <Typography><span>Date: </span>{workoutLog.date}</Typography>
                    <Typography><span>Workout: </span>{workoutLog.name}</Typography>
                    <Typography className={styles.numbers}>Reps: {workoutLog.reps}</Typography>
                    <Typography className={styles.numbers}>Sets: {workoutLog.sets}</Typography>
                </Box>
            </Box>
        )

    if (type === 'cardio')
        return (
            <Box className={styles['workout-log']}>
                <BiRun size={25} className={styles.icon} />
                <Box className={`${styles['content-container']} ${styles.secondary}`}>
                    <Typography><span>Date: </span>{workoutLog.date}</Typography>
                    <Typography><span>Workout: </span>{workoutLog.name}</Typography>
                    <Typography><span>Duration: </span>{workoutLog.duration}</Typography>
                </Box>
            </Box>
        )

    if (type === 'supplement')
        return (
            <Box className={styles['workout-log']}>
                <CgPill size={25} className={styles.icon} />
                <Box className={`${styles['content-container']} ${styles.secondary}`}>
                    <Typography><span>Date: </span>{workoutLog.date}</Typography>
                    <Typography><span>Supplement: </span>{workoutLog.name}</Typography>
                    <Typography><span>Dossage: </span>{workoutLog.dossage}</Typography>
                </Box>
            </Box>
        )
}

export default SummaryLog