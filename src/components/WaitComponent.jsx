import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  loadingText: {
    marginLeft: theme.spacing(2),
  },
}));

const WaitComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress />
      <Typography variant="body1" className={classes.loadingText}>
        chargement...
      </Typography>
    </div>
  );
};

export default WaitComponent;