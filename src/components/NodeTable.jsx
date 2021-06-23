import NodeCell from './NodeCell';

import { nodes } from '../data/nodes';
import parseNodeStatus from '../util/parseNodeStatus';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    alignContent: 'center'
  },
  table: {
    border: '3px solid',
    borderCollapse: 'collapse',
    tableLayout: 'fixed'
  }
}));

const NodeTable = () => {
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

  const nodeRowsArr = sliceArray(nodeStatus.reverse());

  const nodeRows = nodeRowsArr.map(arr => {
    return (
      <tr>
        {arr.map(obj => <NodeCell state={obj.state} >{obj.node}</NodeCell>)}
      </tr>
    )
  })

  return (
    <Paper className={classes.root}>
      <table className={classes.table}>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
      <table className={classes.table}>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
      <table className={classes.table}>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
      <table className={classes.table}>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
      <table className={classes.table}>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
    </Paper>
  )
}

export default NodeTable
