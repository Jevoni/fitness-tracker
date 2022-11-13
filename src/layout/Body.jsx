import React from 'react'
import { Box } from '@mui/material'

const Body = (props) => {
    return (
        <Box sx={{
            backgroundColor: '#ecf0f1',
            width: '85%'
        }}>
            {props.children}
        </Box>
    )
}

export default Body