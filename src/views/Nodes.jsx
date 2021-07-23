import { useState, useEffect } from 'react';
import NodeLegend from '../components/NodeLegend';
import Filter from '../components/Filter';
import NodeContainer from '../components/layout/NodeContainer';
import Loading from '../components/Loading';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import { partitionItems } from '../views/Summary';
import getNodes from '../service/getNodes';

const useStyles = makeStyles(() => ({
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1rem',
  },
  errors: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  }
}));

const Nodes = () => {
  const classes = useStyles();
  const [partition, setPartition] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1);

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText.replace(/\n/ig, ''));
    setPage(1);
  }

  const handlePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    getNodes(setData, setLoading, setError, partition);
    const interval = setInterval(() => getNodes(setData, setLoading, setError, partition), 1000 * 60 * 2);
    return () => clearInterval(interval);
  }, [partition])

  if (!error) {
    if (loading) return <Loading />
    return (
      <div>
        <NodeLegend />
        <div className={classes.filterContainer}>
          <Filter title="Partition"
            partitions={partitionItems}
            onClick={handlePartitionSelection} />
        </div>
        <NodeContainer data={data} page={page} handlePage={handlePage} />
      </div>
    );
  } else {
    return (
      <Alert severity="error"
        className={classes.errors}>
        <AlertTitle>Error</AlertTitle>
        '{error}'
      </Alert>
    )
  }
}

export default Nodes;