import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import icon from "../assets/icon.png"
export const Login = () => {
    const { user, handleUserLogin } = useAuth();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        if (user) navigate('/')
    }, [])
    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setCredentials({ ...credentials, [name]: value });
    }
    return (
        <div className='login-container'>
            <div className="logo-container">
                <img src={icon} alt="" />
            </div>
            <div className='form-container'>
            <p>Login to continue...</p>
                <form  onSubmit={(e) => {handleUserLogin(e, credentials)}}>
                    <div className='field-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input
                            name='email'
                            type='email'
                            placeholder='Enter your email...'
                            value={credentials.email}
                            onChange={(e) => {handleInputChange(e)}} />
                    </div>
                    <div className='field-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Enter your password...'
                            value={credentials.password}
                            onChange={(e) => {handleInputChange(e)}} />
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <p className='register-text'>Dont have an account? Register <Link to="/register">here</Link></p>
            </div>
        </div>
    )
}
