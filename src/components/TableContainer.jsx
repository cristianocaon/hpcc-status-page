import React, { useState } from 'react';
import NodeTable from './NodeTable';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

import requestNodes2 from '../data/v2/requestNodes2';

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
  }
}));

const RACK_COUNT = 26;

const TableContainer = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { nodes } = requestNodes2();

  const getRacks = (racks, page) => {
    let tables = Array();
    for (let num = 5 * page - 4; num <= 5 * page; num++) {
      let rackNum = "Rack_" + num;
      if (racks[rackNum]) {
        tables.push(<NodeTable rack={racks[rackNum]} number={num} />)
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
        count={6}
        variant="outlined"
        onChange={(event, page) => setPage(page)} />
    </Paper>
  )
}

export default TableContainer
