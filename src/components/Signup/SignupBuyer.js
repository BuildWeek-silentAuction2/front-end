// IMPORTANT NOTES FROM GOOGLE SEARCHES:
// to make password field hidden, add <input type="password" name="password"> in the input field on the form page

// useState imported because we will change state of form inputs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignupFormBuyer from './SignupFormBuyer';
// yup imported for form validation
import * as yup from 'yup';



// the URL for our [GET] and [POST] requests
const url = 'https://api-silent-auction.herokuapp.com/api/buyer/register'

// the shape of the state that drives the form
const initialFormValues = {
  // text inputs
  username: '',
  email: '',
  password: '',
  // dropdown selection
  // account: '',
}

// the shape of the validation errors object
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  // account: '',
}

// Step 7 - build
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Your Username must have at least 5 characters')
    .required('Username is required!'),
  email: yup
    .string()
    .email('A VALID email is required')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Your Password must have at least 7 characters')
    .required('Password is required'),
  // account: yup
  //   .string()
  //   .matches( /(Seller|Buyer)/, 'Choose either Seller or Buyer')
  //   .required('Selecting an account type is required')
})

// Styling 

function SignupBuyer() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  // Step 1 - Keep track of whether or not Create Account Button is Disabled
  const [formDisabled, setFormDisabled] = useState(true)

  // Step 2 - Keep track of the validation errors
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // Step 3-4 because we don't need to fetch users from API
  // since we'll be creating their account for the first time

  // Step 5 - Creating a function to post a new user to the api
  // and set the updated list of friends in state
  // the endpoint resonds (on success) with the new friend (with id)
  const postNewUser = user => {
      axios.post(url, user)
        .then(res => {
            setUsers([...users, res.data])
            console.log(res.config.data)
        })
        .catch(err => {
            console.log(err)
        })
  }

  // Step 8 - When form values change, run validation
  // and use them to enable/disable the Create Account button
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])


  const onSubmit = evt => {
      // evt.preventDefault();

      const newUser = {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          // account: formValues.account === 'buyer' ? false : true,
      }
      // Step 6 - Post new user to the API
      postNewUser(newUser)
      setFormValues(initialFormValues)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // Step 9 - When form values change, run validation
    // and update the form errors slice of state (so the form will display errors)
    yup
      .reach(formSchema, name)
      .validate(value)
      .then( valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <SignupFormBuyer
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={formDisabled}
      errors={formErrors}
      />
  )
} 

export default SignupBuyer

// function SignupBuyer() {
//   const [buyerUsers, setBuyerUsers] = useState([])
//   const [buyerFormValues, setBuyerFormValues] = useState(initialFormValues)
//   // Step 1 - Keep track of whether or not Create Account Button is Disabled
//   const [buyerFormDisabled, setBuyerFormDisabled] = useState(true)

//   // Step 2 - Keep track of the validation errors
//   const [buyerFormErrors, setBuyerFormErrors] = useState(initialFormErrors)

//   // Step 3-4 because we don't need to fetch users from API
//   // since we'll be creating their account for the first time

//   // Step 5 - Creating a function to post a new user to the api
//   // and set the updated list of friends in state
//   // the endpoint resonds (on success) with the new friend (with id)
//   const postNewUser = user => {
//       axios.post(url, user)
//         .then(res => {
//             setBuyerUsers([...buyerUsers, res.data])
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//   }

//   // Step 8 - When form values change, run validation
//   // and use them to enable/disable the Create Account button
//   useEffect(() => {
//     formSchema.isValid(buyerFormValues)
//       .then(valid => {
//         setBuyerFormDisabled(!valid)
//       })
//   }, [buyerFormValues])


//   const onSubmit = evt => {
//       evt.preventDefault();

//       const newUser = {
//           username: buyerFormValues.username,
//           email: buyerFormValues.email,
//           password: buyerFormValues.password,
//           // account: formValues.account === 'buyer' ? false : true,
//       }
//       // Step 6 - Post new user to the API
//       postNewUser(newUser)
//       setBuyerFormValues(initialFormValues)
//   }

//   const onInputChange = evt => {
//     const name = evt.target.name
//     const value = evt.target.value

//     // Step 9 - When form values change, run validation
//     // and update the form errors slice of state (so the form will display errors)
//     yup
//       .reach(formSchema, name)
//       .validate(value)
//       .then( valid => {
//         setBuyerFormErrors({
//           ...buyerFormErrors,
//           [name]: '',
//         })
//       })
//       .catch(err => {
//         setBuyerFormErrors({
//           ...buyerFormErrors,
//           [name]: err.errors[0],
//         })
//       })
      
//     setBuyerFormValues({
//       ...buyerFormValues,
//       [name]: value,
//     })
//   }

//   return (
//     <SignupFormBuyer
//       values={buyerFormValues}
//       onInputChange={onInputChange}
//       onSubmit={onSubmit}
//       disabled={buyerFormDisabled}
//       errors={buyerFormErrors}
//       />
//   )
// } 

// export default SignupBuyer