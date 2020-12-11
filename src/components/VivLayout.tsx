import { AppBar, CssBaseline, makeStyles, Toolbar } from '@material-ui/core';
import React from "react";
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#132338',
      zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
      flexGrow: 1,
    },
    logoContainer: {
      paddingRight: theme.spacing(1),
      borderRight: '1px solid #fff',
      marginRight: theme.spacing(1),
    },
  }));

 const VivLayout : React.FC = () => {
    const classes = useStyles();

  return (
   <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img
              src={logo}
              alt="logo"
              width="120"
              height="34"
            />
          </div>
          
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default VivLayout;

