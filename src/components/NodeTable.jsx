import NodeCell from './NodeCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    border: '3px solid #4c514f',
    borderCollapse: 'separate',
    margin: '5px',
    tableLayout: 'fixed'
  }
}));


// Specific information about the node to be displayed on popup
const nodeInfo = {
  name: 'Sample',
  partition: 'Quanah',
  status: 'mix',
  freemem: '0',
  totalmem: '120',
  cpuload: '12',
  cpualloc: '1',
  cpuidle: '0',
  cpuother: '0',
  cputotal: '0',
}

const NodeTable = ({ rack, number }) => {
  const classes = useStyles();
  console.log(rack);
  return (
    <div className={classes.root}>
      <label><em>Rack {number}</em></label>
      <table className={classes.table}>
        <tbody>
          {rack.map(arr => {
            return (
              <tr>
                {arr.map(obj => <NodeCell state={obj.state} info={nodeInfo}>{obj.node}</NodeCell>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default NodeTable
