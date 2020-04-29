import React from 'react'
// STYLING IMPORTS
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    accountType: {
        marginBottom: theme.spacing(2)
    }
  }));
  

function SignupForm(props){
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props;

    const classes = useStyles();

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create an Account
                </Typography>
                <form className={classes.form}>
                    {/* (Step 10) SHOW ERRORS */}
                    <div className='extra space'>
                        <div className='errors'>
                            {errors.username}
                            {errors.email}
                            {errors.password}
                            {/* {errors.account} */}
                        </div>
                        <br></br>
                    </div>
                    {/* ////// TEXT INPUTS ///////// */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            value={values.username}
                            onChange={onInputChange}
                            fullWidth
                            required
                            variant='outlined'
                            label='Username'
                            name='username'
                            type='text'     
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.email}
                                onChange={onInputChange}
                                fullWidth
                                required
                                variant='outlined'
                                label='Email'
                                name='email'
                                type='text'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.password}
                                onChange={onInputChange}
                                fullWidth
                                required
                                variant='outlined'
                                label='Password'
                                name='password'
                                type='password'
                            />
                        </Grid>               
                    {/* ////// DROPDOWN ///////// */}
                        {/* <Grid item xs={12}>
                            <InputLabel className={classes.accountType}>Account Type</InputLabel>
                                <Select 
                                    value={values.account}
                                    onChange={onInputChange}
                                    fullWidth
                                    required
                                    variant='outlined'
                                    name='account'
                                >
                                <option defaultValue=''>Please Choose</option>
                                <option value='Seller'>Seller</option>
                                <option value='Buyer'>Buyer</option>
                            </Select>
                        </Grid> */}
                    </Grid>
                    {/* /////// Create Account BUTTON //////// */}
                    <Button 
                        to='/'
                        onClick={onSubmit} 
                        disabled={disabled} 
                        className={classes.submit}
                        fullWidth
                        variant='contained'
                        color='secondary'
                        >  Create Account
                    </Button>
                </form>
            </div>
        </Container>    
    )
}

export default SignupForm