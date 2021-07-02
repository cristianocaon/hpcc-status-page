import { useState } from 'react';
import Filter from '../components/Filter'
import Charts from '../components/Charts';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

export default function Summary() {
  const classes = useStyles();

  const [partition, setPartition] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  // Still needs to fix -- select "None", close bottom section
  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
    setIsDisplayed(true);
  }

  return (
    <div>
      <div>
        <div className={classes.filterContainer}>
          <Filter category="partition" onClick={handlePartitionSelection} />
        </div>
        <Charts isDisplayed={true} partition={"total"} />
      </div>
      <div>
        <h2 className={classes.title}>{partition}</h2>
        <Charts isDisplayed={isDisplayed} partition={partition.toLowerCase()} />
      </div>
    </div>
  );
}
