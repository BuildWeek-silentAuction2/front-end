import React from 'react'

function LoginForm(props) {
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return (
        <form className='login-form-container'>
            <h2>Login to Your Account</h2>
            {/* //// TEXT INPUTS ////// */}
            <label>Username:&nbsp;
                <input
                // STEP 3 - Inputs need value & change handler
                value={values.username}
                onChange={onInputChange}
                name='username'
                type='text'
            /></label>
            <label>Password:&nbsp;
                <input
                // STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='password'
            /></label>
            {/* STEP 3C - THIS BUTTON WANTS A HANDLER */}
            <button onClick={onSubmit}>Login</button>
        </form>
    )
} 

export default LoginForm