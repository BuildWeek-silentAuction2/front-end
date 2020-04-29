import React, { useState } from 'react';
import axios from 'axios';
import BuyerLoginForm from './BuyerLoginForm';

const BuyerLogin = props => {
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
            <BuyerLoginForm
                // Step 2 - Form Wants Info
                values={handleChange}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>    
    )
}

export default BuyerLogin

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