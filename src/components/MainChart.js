import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PieChart from './PieChart';

// Jobs Status 
const state = {
  labels: ['PD', 'R'],
  datasets: [
    {
      label: 'Status',
      backgroundColor: ['#63b0cd', '#39393a', '#c1b098', '#e9d2f4', '#9b9b93'],
      hoverBackgroundColor: [
        '#63b0cd',
        '#39393a',
        '#c1b098',
        '#e9d2f4',
        '#9b9b93'
      ],
      data: [65, 59]
    }
  ]
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  chart: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  }
}));

export default function MainChart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Job Status</label>
        <PieChart data={state} />
      </Paper>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Node Status</label>
        <PieChart data={state} />
      </Paper>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Job Availability</label>
        <PieChart data={state} />
      </Paper>
    </div>
  );
}
