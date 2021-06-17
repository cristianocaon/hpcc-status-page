import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PieChart from './PieChart';

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
}));

export default function MainChart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <label>Job Status</label>
        <PieChart />
      </Paper>
      <Paper elevation={1}>
        <label>Node Status</label>
        <PieChart />
      </Paper>
      <Paper elevation={1}>
        <label>Job Status</label>
        <PieChart />
      </Paper>
    </div>
  );
}
