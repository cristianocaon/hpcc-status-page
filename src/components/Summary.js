import React from 'react';
import Filter from './Filter'
import Charts from './Charts';
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
    fontFamily: 'Roboto'
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

  // const togglePartitionSummary = () => {
  //   if (partition !== "");
  // }

  return (
    <div>
      <div>
        <h1 className={classes.title}>Overview</h1>
        <Filter onClick={handlePartitionSelection} />
        <Charts isDisplayed={true} partition={""} />
      </div>
      <div>
        <h1 className={classes.title}>{partition}</h1>
        <Charts isDisplayed={isDisplayed} partition={partition} />
      </div>
    </div>
  );
}
