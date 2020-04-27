import React from 'react'

function SignupForm(props){
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='signup form container'>
            <h2>Create an Account</h2>
            {/* (Step 10) SHOW ERRORS */}
            <div className='errors'>
                {errors.username}
                {errors.email}
                {errors.password}
                {errors.account}
            </div>
            {/* ////// TEXT INPUTS ///////// */}
            <label>Username:&nbsp;
            <input
                value={values.username}
                onChange={onInputChange}
                name='username'
                type='text'
            /></label>
            <label>Email:&nbsp;
            <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
            /></label>
            <label>Password:&nbsp;
            <input
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='password'
            /></label>
            {/* ////// DROPDOWN ///////// */}
            <label>Account Type:&nbsp;
            <select
                value={values.account}
                onChange={onInputChange}
                name='account'
            >
                <option defaultValue=''>Please Choose</option>
                <option value='seller'>Seller</option>
                <option value='buyer'>Buyer</option>
            </select></label>
            {/* /////// Create Account BUTTON //////// */}
            <button onClick={onSubmit} disabled={disabled}>Create Account</button>
        </form>
    )
}

export default SignupForm