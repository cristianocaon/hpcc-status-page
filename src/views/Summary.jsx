import { useState } from 'react';
import Filter from '../components/Filter'
import Charts from '../components/Charts';
import { makeStyles } from '@material-ui/core/styles';

import requestSummary from '../service/requestSummary';

const useStyles = makeStyles(() => ({
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
  }
}));

export default function Summary() {
  const classes = useStyles();

  const [partition, setPartition] = useState("Total");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
    setIsDisplayed(true);
  }

  const { charts, error, partitions } = requestSummary();

  let partitionFields = Object.keys(partitions);
  partitionFields.unshift('Total');
  partitionFields.push('All');

  if (!error) {
    return (
      <div>
        <div>
          <div className={classes.filterContainer}>
            <Filter title="Partition"
              partitions={partitionFields}
              onClick={handlePartitionSelection}
            />
          </div>
          {partition !== 'All'
            ? <><h2 className={classes.title}>{partition}</h2>
              <Charts data={charts[partition.toLowerCase()]} /></>
            : <>{partitionFields.map(ptt => {
              if (ptt !== 'All') {
                return (
                  <>
                    <h2 className={classes.title}>{ptt.charAt(0).toUpperCase() + ptt.slice(1)}</h2>
                    <Charts data={charts[ptt.toLowerCase()]} />
                  </>
                )
              }
            })}</>
          }
        </div>
      </div>
    );
  } else {
    return <h2>Something went wrong...</h2>
  }
}
