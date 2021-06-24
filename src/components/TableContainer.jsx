import { nodes } from '../data/nodes';
import NodeTable from './NodeTable';
import parseNodeStatus from '../util/parseNodeStatus';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    alignContent: 'center'
  }
}));

const TableContainer = () => {

  const classes = useStyles();

  const nodeStatus = parseNodeStatus(nodes).map(obj => {
    const node = obj.node.split("cpu-")[1];
    return ({ node: node, state: obj.state })
  });

  const sliceArray = data => {
    const rows = [];
    for (let i = 0; i < data.length; i += 4) {
      rows.push(data.slice(i, i + 4));
    }
    return rows;
  }

  const splitRack = data => {
    let racks = [];
    let rack = [];
    let count = 2;
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].node.charAt(0)) === count) {
        rack.push(data[i]);
      } else {
        racks.push(rack);
        rack = [];
        count--;
        rack.push(data[i])
      }
    }
    racks.push(rack);
    return racks;
  }

  const racks = splitRack(nodeStatus.reverse());

  const splitRackRows = racks => {
    const rackRows = racks.map(rack => {
      const rows = sliceArray(rack);
      return rows;
    })
    return rackRows;
  }

  const rackRows = splitRackRows(racks);

  return (
    <Paper className={classes.root}>
      {rackRows.map(rack => {
        return <NodeTable rack={rack} />
      })}
    </Paper>
  )
}

export default TableContainer
