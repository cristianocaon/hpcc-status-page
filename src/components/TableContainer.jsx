import requestNodes from '../service/requestNodes';
import NodeTable from './NodeTable';
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

function splitRack(nodes) {
  let racks = [];
  let rack = [];
  let count = parseInt(nodes[0].nodename.split("-")[1]);
  for (let i = 0; i < nodes.length; i++) {
    const [, rackNum, nodeNum] = nodes[i].nodename.split("-");
    if (parseInt(rackNum) > count) {
      racks.push(rack);
      rack = [];
      count += (parseInt(rackNum) - count);
      rack.push(nodes[i]);
    } else if (parseInt(rackNum) === count) {
      rack.push(nodes[i]);
    }
  }
  racks.push(rack);
  return racks;
}

function fillEmptyCells(racks) {
  let racksFilled = [...racks].map(rack => {
    let currentRack = rack;
    if (currentRack.length > 0) {
      let firstNode = currentRack[0].nodename.split("-")[2];
      let lastNode = currentRack[currentRack.length - 1].nodename.split("-")[2];
      let top = 64 - parseInt(lastNode)
      let bottom = parseInt(firstNode) - 1;
      if (top > 0) {
        for (let j = 0; j < top; j++) {
          currentRack.push({ nodename: '---------', status: 'empty' });
        }
      }
      if (bottom > 0) {
        for (let j = bottom; j > 0; j--) {
          currentRack.unshift({ nodename: '---------', status: 'empty' });
        }
      }
      let prev = 0;
      for (let i = 0; i < currentRack.length; i++) {
        let current = parseInt(currentRack[i].nodename.split("-")[2])
        let diff = current - prev;
        if (diff > 1) {
          for (let j = 0; j < diff - 1; j++) {
            currentRack.splice(i, 0, { nodename: '---------', status: 'empty' });
          }
        }
        prev = current;
      }
    }
    return currentRack;
  });
  return racksFilled;
}

function sliceArray(data) {
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(data.slice(i, i + 4));
  }
  return rows;
}

function splitRackRows(racks) {
  const rackRows = racks.map(rack => {
    const rows = sliceArray(rack);
    return rows;
  })
  return rackRows;
}

const TableContainer = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  let { errors, nodes } = requestNodes();
  let rackRows = undefined;
  if (errors === "") {
    const racks = splitRack([...nodes]);
    const filledRacks = fillEmptyCells([...racks]);
    console.log(filledRacks);
    rackRows = splitRackRows(filledRacks);
    console.log(rackRows);
  } else {
    // Change later to display on interface
    console.log(errors);
  }

  return (
    <Paper className={classes.root} elevation={1}>
      <div className={classes.tables}>
        {rackRows.map(rack => {
          return <NodeTable rack={rack} number={0/*rackNumber--*/} />
        })}
      </div>
      <div className={classes.pagination}>
        <Pagination count={7} page={page} onChange={handleChange} variant="outlined" color="primary" />
      </div>
    </Paper>
  )
}

export default TableContainer
