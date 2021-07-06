import { useState } from 'react';
import Legend from '../components/Legend';
import Filter from '../components/Filter';
import TableContainer from '../components/TableContainer';
import { makeStyles } from '@material-ui/core/styles';

import { partitionItems } from '../views/Summary';

const useStyles = makeStyles(() => ({
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px',
  },
}));

const Nodes = () => {
  const classes = useStyles();
  const [partition, setPartition] = useState("");

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  return (
    <div>
      <Legend />
      <div className={classes.filterContainer}>
        <Filter title="Partition"
          partitions={partitionItems}
          onClick={handlePartitionSelection} />
      </div>
      <TableContainer />
    </div>
  );
}

export default Nodes;