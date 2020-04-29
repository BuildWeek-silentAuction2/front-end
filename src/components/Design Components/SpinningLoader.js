import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function SpinningLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={Theme}>
        <CircularProgress color="secondary"/>
      </ThemeProvider>
    </div>
  );
}