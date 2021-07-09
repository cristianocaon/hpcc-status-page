import { useState } from 'react';
import Filter from '../components/Filter'
import Charts from '../components/Charts';
import Availability from '../components/Availability';
import Divider from '@material-ui/core/Divider';
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
    margin: '10px',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '10px',
  }
}));

export let partitionItems = [];

const summary = requestSummary();

const Summary = () => {
  const classes = useStyles();
  const [partition, setPartition] = useState("Total");

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  if (!('error' in summary)) {
    let { charts, partitions } = summary;

    let partitionFields = Object.keys(partitions);
    partitionItems = [...partitionFields];
    partitionFields.unshift('Total');
    partitionFields.push('All');

    return (
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
    );
  } else {
    return <h2 className={classes.error}>Something went wrong... ERROR: '{summary.error}'</h2>
  }
}

export default Summary;