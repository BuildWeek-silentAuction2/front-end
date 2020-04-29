import React from 'react'
// STYLE IMPORTS
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

function SellerLoginForm(props) {
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log into Your Seller Account
                </Typography>
                <form className={classes.form}>
                    {/* //// TEXT INPUTS ////// */}
                    <TextField
                    // STEP 3 - Inputs need value & change handler
                    value={values.username}
                    onChange={onInputChange}
                    fullWidth
                    required
                    label='Username'
                    variant='outlined'
                    // margin='normal'
                    name='username'
                    type='text'
                />
                    <TextField
                    // STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                        value={values.password}
                        onChange={onInputChange}
                        fullWidth
                        required
                        label='Password'
                        variant='outlined'
                        margin='normal'
                        name='password'
                        type='password'
                />
                    {/* STEP 3C - THIS BUTTON WANTS A HANDLER */}
                    <Button 
                        onClick={onSubmit} 
                        fullWidth variant='contained' 
                        color='secondary'
                        className={classes.submit}
                    > Login
                    </Button>
                </form>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/signup-seller" variant="body2">
                            Don't have an account? Sign up
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
} 

export default SellerLoginForm