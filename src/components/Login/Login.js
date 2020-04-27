import React, { useState } from 'react'
import LoginForm from './LoginForm'


const initialFormValues = {
    username: '',
    password: '',
}

function Login(){
    const [users, setUsers] = useState([])

    // Step 1 - Hold all Values of the form
    const [formValues, setFormValues] = useState(initialFormValues)

    const onInputChange = evt => {
        // Step 4 - Implent a change handler which can change the state of inputs of type text
        const name = evt.target.name
        const value = evt.target.value

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const onSubmit = evt => {
        // Step 5 - implement a submit handler
        evt.preventDefault()

        const newUser = {
            name: formValues.username,
            password: formValues.password,
        }
        setUsers([ ...users, newUser])
        setFormValues(initialFormValues)
    }

    return (
        <div className="login form">
            <LoginForm
                // Step 2 - Form Wants Info
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
            />
        </div>    
    )
}

export default Login