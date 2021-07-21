import { useState, useEffect } from 'react';
import Filter from '../components/Filter'
import Charts from '../components/Charts';
import Availability from '../components/Availability';
import Loading from '../components/Loading';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import getSummary from '../service/getSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1rem',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '1.5rem',
  },
  divider: {
    margin: '1.5rem',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  }
}));

export let partitionItems = [];

const Summary = () => {
  const classes = useStyles();
  const [partition, setPartition] = useState("Total");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [partitionFields, setPartitionFields] = useState([]);
  const [chartData, setChartData] = useState();

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  useEffect(() => {
    getSummary(setData, setLoading, setError);
    const interval = setInterval(() => getSummary(setData, setLoading, setError), 1000 * 60 * 2);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (data.partitions) {
      let temp = Object.keys(data.partitions);
      temp.unshift('All');
      temp.unshift('Total');
      setPartitionFields(temp);
    }
  }, [data]);

  useEffect(() => {
    partitionItems = [...partitionFields];
    partitionItems.shift();
  }, [partitionFields]);

  useEffect(() => {
    setChartData(data.charts);
  }, [data, partition])

  if (!error) {
    if (loading) return <Loading />
    return (
      <>
        <h2 className={classes.title}>Partition Status</h2>
        <Availability partitions={data.partitions} />
        <Divider className={classes.divider} />
        <div className={classes.filterContainer}>
          <Filter title="Partition"
            partitions={partitionFields}
            onClick={handlePartitionSelection}
          />
        </div>
        {partition !== 'All'
          ? <><h2 className={classes.title}>{partition}</h2>
            <Charts data={chartData} partition={partition} /></>
          : <>{partitionItems.filter(el => { return el !== 'All' }).map(ptt => {
            return <>
              <h2 className={classes.title}>{ptt.charAt(0).toUpperCase() + ptt.slice(1)}</h2>
              <Charts data={chartData} partition={ptt.toLowerCase()} />
            </>
          })}</>
        }
      </>
    );
  } else {
    return (
      <Alert severity="error"
        className={classes.error}>
        <AlertTitle>Error</AlertTitle>
        '{error}'
      </Alert>
    )
  }
}

export default Summary;