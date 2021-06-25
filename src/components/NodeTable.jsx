import NodeCell from './NodeCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  table: {
    border: '3px solid #4c514f',
    borderCollapse: 'separate',
    margin: '5px',
    marginTop: '25px',
    marginBottom: '25px',
    tableLayout: 'fixed'
  }
}));

const NodeTable = ({ rack }) => {
  const classes = useStyles();
  return (
    <div>
      <table className={classes.table}>
        <tbody>
          {rack.map(arr => {
            return (
              <tr>
                {arr.map(obj => <NodeCell state={obj.state}>{obj.node}</NodeCell>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default NodeTable
