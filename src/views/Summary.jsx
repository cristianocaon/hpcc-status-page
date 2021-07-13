import { useState, useEffect } from 'react';
import Filter from '../components/Filter'
import Charts from '../components/Charts';
import Availability from '../components/Availability';
import Loading from '../components/Loading';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import requestSummary from '../service/requestSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '20px',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  }
}));

export let partitionItems = [];

const summaryInfo = requestSummary();

const Summary = () => {
  const classes = useStyles();
  const [partition, setPartition] = useState("Total");
  const [loading, setLoading] = useState(true);

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (!('error' in summaryInfo)) {
    let { charts, partitions } = summaryInfo;

    let partitionFields = Object.keys(partitions);
    partitionItems = [...partitionFields];
    partitionFields.unshift('Total');
    partitionFields.push('All');

    return (
      <div>
        {!loading ?
          <>
            <h2 className={classes.title}>Partition Status</h2>
            <Availability partitions={partitions} />
            <Divider />
            <div className={classes.filterContainer}>
              <Filter title="Partition"
                partitions={partitionFields}
                onClick={handlePartitionSelection}
              />
            </div>
            {partition !== 'All'
              ? <><h2 className={classes.title}>{partition}</h2>
                <Charts data={charts[partition.toLowerCase()]} /></>
              : <>{partitionItems.map(ptt => {
                return <>
                  <h2 className={classes.title}>{ptt.charAt(0).toUpperCase() + ptt.slice(1)}</h2>
                  <Charts data={charts[ptt.toLowerCase()]} />
                </>
              })}</>
            }
          </>
          : <Loading />
        }
      </div>
    );
  } else {
    return <Alert severity="error"
      className={classes.error}>
      <AlertTitle>Error</AlertTitle>'
      {summaryInfo.error}'
    </Alert>
  }
}

export default Summary;