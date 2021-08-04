import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PartitionBox from './PartitionBox';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  }
}));

const PartitionStatus = ({ partitions }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(partitions).map(partition => {
        return <PartitionBox partition={partition} status={partitions[partition]} />
      })}
    </div>
  )
}

export default PartitionStatus
