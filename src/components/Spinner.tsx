
import { makeStyles, Theme, CircularProgress } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    
    loaderOverlay: {
      borderRadius: theme.spacing(0.5),
      zIndex: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      cursor: 'progress',
    },
    loaderContainer: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
    },
  }));

const Spinner : React.FC = () => {
    const classes = useStyles();

    return (<div className={classes.loaderOverlay}>
        <div className={classes.loaderContainer}>
          <CircularProgress variant="indeterminate" color="primary" />
        </div>
      </div>)
};
export default Spinner;