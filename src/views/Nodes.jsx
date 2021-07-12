import { useState, useEffect } from 'react';
import Legend from '../components/Legend';
import Filter from '../components/Filter';
import TableContainer from '../components/TableContainer';
import Loading from '../components/Loading';
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
  const [loading, setLoading] = useState(true);

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {!loading ?
        <div>
          <Legend />
          <div className={classes.filterContainer}>
            <Filter title="Partition"
              partitions={partitionItems}
              onClick={handlePartitionSelection} />
          </div>
          <TableContainer />
        </div>
        : <Loading />
      }
    </>
  );
}

export default Nodes;