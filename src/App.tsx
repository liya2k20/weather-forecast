import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { Suspense } from 'react';
import ChartContainer from './components/chart/ChartContainer';
import VivLayout from './components/VivLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minHeight: 380,
    }
  }));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <VivLayout />
      <div >
        <Suspense fallback={<div>Loading...</div>}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >

            <Grid item xs={11}>
              <Paper elevation={5} className={classes.paper}>
                <ChartContainer />
              </Paper>
            </Grid>
          </Grid>
        </Suspense>
      </div>
    </>)

}

export default App;
