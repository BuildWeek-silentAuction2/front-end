import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme";

const styles = makeStyles((theme) => ({
  button: {
    //additional settings if necessary
    color: theme,
  }
}));

function StyledButton(props) {
  const {classes, children} = props;
  return (
    <ThemeProvider theme={Theme}>
      <Button variant="contained" color="secondary" className={classes.button}>
      <b>{children}</b>
      </Button>
    </ThemeProvider>
  );
}

export default withStyles(styles)(StyledButton);