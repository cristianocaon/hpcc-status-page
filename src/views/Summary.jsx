import React from 'react';
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
  title: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function Summary() {
  const classes = useStyles();

  const [partition, setPartition] = React.useState("");
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
    setIsDisplayed(true);
  }

  return (
    <div>
      <div>
        <Filter onClick={handlePartitionSelection} />
        <Charts isDisplayed={true} partition={""} />
      </div>
      <div>
        <h2 className={classes.title}>{partition}</h2>
        <Charts isDisplayed={isDisplayed} partition={partition} />
      </div>
    </div>
  );
}
