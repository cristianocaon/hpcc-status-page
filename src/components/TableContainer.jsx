import React, { useState } from 'react';
import NodeTable from './NodeTable';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import requestNodes from '../service/requestNodes';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em',
    alignContent: 'center',
    overflowX: 'auto',
    overflowY: 'hidden'
  },
  tables: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1em',
    alignContent: 'center'
  },
  pagination: {
    marginBottom: '20px',
  },
  errors: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  }
}));

const nodesInfo = requestNodes();

const TableContainer = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  if (!('errors' in nodesInfo)) {

    let { nodes } = nodesInfo;

    let rackNums = Object.keys(nodes).sort((a, b) => {
      let n1 = parseInt(a.split('_')[1]);
      let n2 = parseInt(b.split('_')[1]);
      if (n1 < n2) return -1;
      if (n1 > n2) return 1;
      return 0;
    }).reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 5)
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }
      resultArray[chunkIndex].push(item)
      return resultArray
    }, []);

    const getRacks = (racks, page) => {
      let tables = [];
      if (rackNums[page - 1]) {
        for (let num of rackNums[page - 1]) {
          tables.push(<NodeTable rack={racks[num]} number={num} />)
        }
      }
      return tables;
    }

    return (
      <Paper className={classes.root} elevation={1}>
        <div className={classes.tables}>
          {getRacks(nodes, page)}
        </div>
        <Pagination
          className={classes.pagination}
          page={page}
          count={rackNums.length}
          variant="outlined"
          onChange={(event, page) => setPage(page)} />
      </Paper>
    )
  } else {
    return <Alert severity="error"
      className={classes.errors}>
      <AlertTitle>Error</AlertTitle>'
      {nodesInfo.errors}'
    </Alert>
  }
}

export default TableContainer
