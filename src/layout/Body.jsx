import React from 'react'
import { Box } from '@mui/material'

import styles from './styles/Body.module.css'

const Body = (props) => {
    return (
        <Box className={styles.body}>
            {props.children}
        </Box>
    )
}

export default Body