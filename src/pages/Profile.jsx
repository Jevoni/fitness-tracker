import React, { useState, useEffect, useContext, useRef } from 'react'
import { Box, Button } from '@mui/material'
import DefaultUserPic from '../media/user.png'

import AuthContext from '../context/AuthContext'

import Body from '../layout/Body'

import styles from './styles/Profile.module.css'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
    const { authTokens } = useContext(AuthContext)
    const [profile, setProfile] = useState(null)
    const profileRef = useRef()
    profileRef.current = profile

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [edit, setEdit] = useState(null)

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
        setFirstName(profileRef.current?.first_name)
        setLastName(profileRef.current?.last_name)
        setEmail(profileRef.current?.email)
        console.log(profileRef.current)
    }


    useEffect(() => {
        getProfileDetails()
        console.log('Profile (useEffect) main')
    }, [])


    if (!edit) {
        return (
            <Body>
                <Box className={styles.content}>
                    <Box className={`${styles['signup-container']}`}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%', height: '85%', alignItems: 'center', }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30%', width: '100%', marginBottom: '30px' }}>
                                <Box sx={{ height: '100%', width: '20%', backgroundColor: '#dbc3e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
                                    <Box component='img' src={DefaultUserPic} height='20px' />
                                </Box>
                            </Box>
                            <Box style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                <div className={styles.inputbox}>
                                    <label for="firstName">First Name: </label>
                                    <input
                                        readOnly
                                        name='firstName'
                                        type='text'
                                        value={profileRef.current?.first_name}
                                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', width: '60%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                    <label for="lastName">Last Name: </label>
                                    <input
                                        readOnly
                                        name='lastName'
                                        type='text'
                                        value={profileRef.current?.last_name}
                                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px', width: '60%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                    <label for="email">Email: </label>
                                    <input
                                        readOnly
                                        type='email'
                                        name='email'
                                        value={profileRef.current?.email}
                                        autoComplete='username'
                                        style={{ height: '35px', fontSize: '15px', marginBottom: '2px', marginTop: '2px', width: '60%' }}
                                    />
                                </div>
                                {/* <input
                                readOnly
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Password'
                                autoComplete='new-password'
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ height: '35px', fontSize: '15px', marginTop: '2px', marginBottom: '2px' }} /> */}
                            </Box>
                            <Button variant='filled' onClick={() => setEdit(true)} className={`${styles['button-edit']}`}>Edit Profile</Button>
                        </Box>
                    </Box>
                </Box>
            </Body>
        )
    }

    return (
        <ProfileForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            setEdit={setEdit}
            getProfileDetails={getProfileDetails}
        />
    )
}

export default Profile