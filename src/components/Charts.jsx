import PieChart from './PieChart';
import Card from '@material-ui/core/Card';
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
        <PieChart data={usageConfig} />
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Job Status</strong></label>
        <PieChart data={jobConfig} />
      </Card>
      <Card className={classes.card}>
        <label className={classes.title}><strong>Node Status</strong></label>
        <PieChart data={nodeConfig} />
      </Card>
    </div>
  );
}

export default Charts;
