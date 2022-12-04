import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Box, Button } from '@mui/material'

import DefaultUserPic from '../media/user.png'

import Body from '../layout/Body'

import styles from '../pages/styles/Profile.module.css'

const ProfileForm = ({ firstName, lastName, email, setEdit, getProfileDetails }) => {
    const { authTokens } = useContext(AuthContext)
    const [newFirst, setNewFirst] = useState(firstName)
    const [newLast, setNewLast] = useState(lastName)
    const [newMail, setNewMail] = useState(email)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/profile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'first_name': newFirst,
                'last_name': newLast,
                'email': newMail,
            })
        })
        alert('Changes Submitted!')
        setEdit(false)
        getProfileDetails()
    }

    useEffect(() => {
        getProfileDetails()
        setNewFirst(firstName)
        setNewLast(lastName)
        setNewMail(email)
        console.log('useEffect (Profile) second')
    }, [firstName, lastName, email])

    return (
        <Body>
            <Box className={styles.content}>
                <Box className={`${styles['signup-container']}`}>
                    <form onSubmit={onSubmitHandler} className={`${styles['signup-container']}form`}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30%', width: '100%', marginBottom: '30px' }}>
                            <Box sx={{ height: '100%', width: '20%', backgroundColor: '#dbc3e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
                                <Box component='img' src={DefaultUserPic} height='50%' />
                            </Box>
                        </Box>
                        <Box style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                <label for="firstName">First Name: </label>
                                <input
                                    type='text'
                                    value={newFirst}
                                    onChange={(e) => setNewFirst(e.target.value)}
                                    style={{ height: '35px', fontSize: '15px', marginBottom: '2px', width: '60%' }}
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                <label for="lastName">Last Name: </label>
                                <input
                                    type='text'
                                    value={newLast}
                                    placeholder
                                    onChange={(e) => setNewLast(e.target.value)}
                                    style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px', width: '60%' }}
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                <label for="email">Email: </label>
                                <input
                                    type='email'
                                    name='email'
                                    value={newMail}
                                    onChange={(e) => setNewMail(e.target.value)}
                                    style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px', width: '60%' }}
                                />
                            </div>
                            {/* <input
                            type='password'
                            name='password'
                            value={password}
                            placeholder='New Password'
                            autoComplete='new-password'
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ height: '35px', fontSize: '15px', marginTop: '2px', marginBottom: '2px' }} />
                        <input
                            type='password'
                            value={confirmPassword}
                            placeholder='Confirm New Password'
                            autoComplete='new-password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={{ height: '35px', fontSize: '15px', marginTop: '2px' }} /> */}
                        </Box>
                        <Box className={`${styles['button-container']}`} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant='filled' type="submit" className={`${styles['button-add']}`}>Confirm</Button>
                            <Button className={`${styles['login-container']} ${styles['button-cancel']}`} onClick={() => setEdit(false)}>Cancel</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Body >
    )
}

export default ProfileForm