import React, { useState } from 'react'
import LoginForm from './LoginForm'

const Login = props => {
    const [login, setLogin] = useState({username: "", password: ""});
  
    const handleChange = e => {
      setLogin({...login, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
        .post("http://localhost:5000/api/login", login)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubblepage");
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login form">
            <LoginForm
                // Step 2 - Form Wants Info
                values={formValues}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>    
    )
}

export default Login

    // const onSubmit = evt => {
    //     // Step 5 - implement a submit handler
    //     evt.preventDefault()

    //     const newUser = {
    //         name: formValues.username,
    //         password: formValues.password,
    //     }
    //     setUsers([ ...users, newUser])
    //     setFormValues(initialFormValues)
    // }