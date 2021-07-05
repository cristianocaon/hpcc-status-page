import PieChart from './PieChart';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import requestSummary from '../service/requestSummary';
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

const Charts = ({ isDisplayed, partition }) => {
  const classes = useStyles();

  const summary = requestSummary();
  let jobSummaryConfig = undefined;
  let nodeSummaryConfig = undefined;
  let usageSummaryConfig = undefined;
  if (summary.error === "" && partition !== "") {
    const [usageLabels, usageValues] = parseSummaryData(summary[partition].usage)
    usageSummaryConfig = chartConfig(usageLabels, usageValues);
    const [jobLabels, jobValues] = parseSummaryData(summary[partition].jobs)
    jobSummaryConfig = chartConfig(jobLabels, jobValues);
    const [nodeLabels, nodeValues] = parseSummaryData(summary[partition].nodes)
    nodeSummaryConfig = chartConfig(nodeLabels, nodeValues);
  } else {
    // Change this to display on interface
    console.log(summary.error);
  }

  if (isDisplayed) {
    return (
      <div className={classes.root}>
        <Paper className={classes.chart} elevation={1}>
          <label className={classes.title}>Usage</label>
          <PieChart data={usageSummaryConfig} />
        </Paper>
        <Paper className={classes.chart} elevation={1}>
          <label className={classes.title}>Job Status</label>
          <PieChart data={jobSummaryConfig} />
        </Paper>
        <Paper className={classes.chart} elevation={1}>
          <label className={classes.title}>Node Status</label>
          <PieChart data={nodeSummaryConfig} />
        </Paper>
      </div>
    );
  } else {
    return null;
  }
}

export default Charts;
