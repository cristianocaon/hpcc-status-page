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
  },
  title: {
    paddingBottom: '0',
  }
}));

const NodeTable = ({ rack, number }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label className={classes.title}><em>Rack {number}</em></label>
      <table className={classes.table}>
        <tbody>
          {rack.map(arr => {
            return (
              <tr>
                {arr.map(obj => <NodeCell state={obj.status} info={obj}>{obj.nodename}</NodeCell>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default NodeTable
