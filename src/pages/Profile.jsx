import React, { useState, useEffect, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import DefaultUserPic from '../media/user.png'

import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import styles from './styles/Profile.module.css'

const Profile = () => {
    const { authTokens } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profile, setProfile] = useState('')

    const onSubmitHandler = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/profile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            body: JSON.stringify({
                'first_name': firstName,
                'last_name': lastName,
                'email': email,
                'password1': password,
                'password2': confirmPassword,
            })
        })
        const data = await response.json()
        alert('Changes Submitted!')
    }

    useEffect(() => {
        const getProfileDetails = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/profile/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                },
            })
            const data = await response.json()
            setProfile(data)
        }
        getProfileDetails()
        console.log('Profile (useEffect)')
    }, [])

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
                        <input
                            type='text'
                            value={firstName}
                            placeholder={profile['first_name']}
                            onChange={(e) => setFirstName(e.target.value)}
                            style={{ height: '35px', fontSize: '15px', marginBottom: '2px' }} />
                        <input
                            type='text'
                            value={lastName}
                            placeholder={profile['last_name']}
                            onChange={(e) => setLastName(e.target.value)}
                            style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                        <input
                            type='email'
                            name='email'
                            value={email}
                            placeholder={profile['email']}
                            autoComplete='username'
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px' }} />
                        <input
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
                            style={{ height: '35px', fontSize: '15px', marginTop: '2px' }} />
                        <Button variant='filled' type="submit" className={`${styles['login-container']}button`}>Confirm Changes</Button>
                    </form>
                </Box>
            </Box>
        </Body>
    )
}

export default Profile