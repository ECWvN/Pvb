import React, { useState } from 'react'
import './Register.css'
import { auth } from "../../firebase"
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useAuthValue } from "../../context/AuthContext";
import BannerReg from "./bannerReg.png"

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        setError('')
        if (validatePassword()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            navigate('/menu')
                        }).catch((err) => alert(err.message))
                })
                .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className='centerr'>
            <div className="regBanner">
                <img className="bnrr" src={BannerReg} />
            </div>
            <div className='auth'>
                <h1 className="regtit">Registreren</h1>
                {error && <div className='auth__error'>{error}</div>}
                <form onSubmit={register} name='registration_form'>
                    <label className="reglabel">email</label>
                    <input
                        type='email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)} />

                    <label className="reglabel">wachtwoord</label>
                    <input
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)} />
                    <label className="reglabel">wachtword bevestigen</label>

                    <input
                        type='password'
                        value={confirmPassword}
                        required
                        onChange={e => setConfirmPassword(e.target.value)} />

                    <button className=" butoon" type='submit'>Registreren</button>
                </form>
                <span classname=" al een acc">
                    Heb je al een account?
                    <Link to='/login'>login</Link>
                </span>
            </div>
        </div>
    )
}

export default Register