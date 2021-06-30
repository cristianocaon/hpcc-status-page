import { nodes } from '../data/nodes';
import NodeTable from './NodeTable';
import parseNodeStatus from '../util/parseNodeStatus';
import { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em',
    alignContent: 'center',
    overflow: 'hidden',
  },
  tables: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1em',
    alignContent: 'center'
  },
  pagination: {
    margin: '20px'
  }
}));

const TableContainer = () => {

  const classes = useStyles();

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const nodeStatus = parseNodeStatus(nodes);

  const splitRack = data => {
    let isFirst = true;
    let racks = [];
    let rack = [];
    let count = parseInt(data[0].node.split("-")[1]);
    for (let i = 0; i < data.length; i++) {

      let [type, rackNum, nodeNum] = data[i].node.split("-");

      if (parseInt(rackNum) < count) {
        racks.push(rack);
        rack = [];
        count--;
        isFirst = true;
      } else if (!isFirst && parseInt(rackNum) === count) {
        rack.push(data[i]);
      }

      if (isFirst) {
        const check = 60 - parseInt(nodeNum);
        if (check > 0) {
          for (let j = 0; j < check; j++) {
            rack.push({ node: '---------', state: 'empty' });
          }
        }
        isFirst = false;
        rack.push(data[i]);
      }
    }
    racks.push(rack);
    return racks;
  }

  const sliceArray = data => {
    const rows = [];
    for (let i = 0; i < data.length; i += 4) {
      rows.push(data.slice(i, i + 4));
    }
    return rows;
  }

  const racks = splitRack(nodeStatus.reverse());

  let rackNumber = nodeStatus[0].node.split("-")[1];

  const splitRackRows = racks => {
    const rackRows = racks.map(rack => {
      const rows = sliceArray(rack);
      return rows;
    })
    return rackRows;
  }

  const rackRows = splitRackRows(racks);

  return (
    <Paper className={classes.root} elevation={1}>
      <div className={classes.tables}>
        {rackRows.map(rack => {
          return <NodeTable rack={rack} number={rackNumber--} />
        })}
      </div>
      <div className={classes.pagination}>
        <Pagination count={7} page={page} onChange={handleChange} variant="outlined" color="primary" />
      </div>
    </Paper>
  )
}

export default TableContainer
