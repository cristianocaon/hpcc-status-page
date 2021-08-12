import PieChart from '../PieChart';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import chartConfig from '../../util/chartConfig';
import parseSummaryData from '../../util/parseSummaryData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '1rem',
  },
  card: {
    width: '25rem',
    margin: '1rem',
  },
  error: {
    margin: '5rem',
  }
}));

const ChartContainer = ({ data, partition }) => {
  const classes = useStyles();

  let temp = partition.toLowerCase();

  const [usageLabels, usageValues] = parseSummaryData(data[temp]["usage"])
  const [jobLabels, jobValues] = parseSummaryData(data[temp]["jobs"])
  const [nodeLabels, nodeValues] = parseSummaryData(data[temp]["nodes"])

  const usageConfig = chartConfig("usage", usageLabels, usageValues);
  const jobConfig = chartConfig("job", jobLabels, jobValues);
  const nodeConfig = chartConfig("node", nodeLabels, nodeValues);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Cluster Allocation</strong></label>
        {usageValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={usageConfig} isUsage={true} /> : <Typography className={classes.error}>No utilization information available</Typography>}
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Job Status</strong></label>
        {jobValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={jobConfig} isUsage={false} /> : <Typography className={classes.error}>No jobs currently running</Typography>}
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Node Status</strong></label>
        {nodeValues.reduce((a, b) => a + b) !== 0 ? <PieChart data={nodeConfig} isUsage={false} /> : <Typography className={classes.error}>No status information available</Typography>}
      </Card>
    </div>
  );
}

export default ChartContainer;
