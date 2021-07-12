import PieChart from './PieChart';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import chartConfig from '../util/chartConfig';
import parseSummaryData from '../util/parseSummaryData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '30px'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '10px',
  },
  card: {
    margin: '5px',
  },
  error: {
    margin: '50px',
    // textAlign: 'center',
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
      <Card className={classes.card}>
        <label className={classes.title}><strong>Usage</strong></label>
        {usageValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={usageConfig} /> : <Typography className={classes.error}>No usage information available</Typography>}
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Job Status</strong></label>
        {jobValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={jobConfig} /> : <Typography className={classes.error}>No jobs currently running</Typography>}
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Node Status</strong></label>
        {nodeValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={nodeConfig} /> : <Typography className={classes.error}>No status information available</Typography>}
      </Card>
    </div>
  );
}

export default Charts;
