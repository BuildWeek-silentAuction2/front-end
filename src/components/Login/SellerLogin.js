import React, { useState } from 'react'
import axios from "axios";
import SellerLoginForm from './SellerLoginForm'

const SellerLogin = props => {
    const [login, setLogin] = useState({username: "", password: ""});
  
    const handleChange = e => {
      setLogin({...login, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
        .post("https://api-silent-auction.herokuapp.com/api/seller/login", login)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubblepage");
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login form">
            <SellerLoginForm
                // Step 2 - Form Wants Info
                values={handleChange}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>    
    )
}

export default SellerLogin

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