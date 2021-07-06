import PieChart from './PieChart';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import chartConfig from '../util/chartConfig';
import parseSummaryData from '../util/parseSummaryData';

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

const Charts = ({ data }) => {
  const classes = useStyles();

  const [usageLabels, usageValues] = parseSummaryData(data.usage)
  const [jobLabels, jobValues] = parseSummaryData(data.jobs)
  const [nodeLabels, nodeValues] = parseSummaryData(data.nodes)

  const usageConfig = chartConfig(usageLabels, usageValues);
  const jobConfig = chartConfig(jobLabels, jobValues);
  const nodeConfig = chartConfig(nodeLabels, nodeValues);

  return (
    <div className={classes.root}>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Usage</label>
        <PieChart data={usageConfig} />
      </Paper>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Job Status</label>
        <PieChart data={jobConfig} />
      </Paper>
      <Paper className={classes.chart} elevation={1}>
        <label className={classes.title}>Node Status</label>
        <PieChart data={nodeConfig} />
      </Paper>
    </div>
  );
}

export default Charts;
