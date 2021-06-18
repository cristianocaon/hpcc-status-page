import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PieChart from './PieChart';
import { jobs } from '../services/jobs';
import parseJobStatus from '../util/ParseJobStatus';
import parseUniqueCount from '../util/ParseUniqueCount';
import chartConfig from '../util/ChartConfig.js';

const statuses = parseJobStatus(jobs);
const data = parseUniqueCount(statuses);
const state = chartConfig(data);

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

const MainChart = () => {
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

export default MainChart;
