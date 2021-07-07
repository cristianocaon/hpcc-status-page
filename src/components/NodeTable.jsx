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

  const getRows = (rack) => {
    let rows = Array();
    for (let row = Object.keys(rack).length; row > 0; row--) {
      rows.push(
        <tr>
          {rack[row].map(obj => {
            if (obj) {
              return <NodeCell state={obj.status} info={obj}>{obj.nodename}</NodeCell>
            } else {
              return <NodeCell state={'empty'} info={{ state: 'empty' }}>{'---------------'}</NodeCell>
            }
          })}
        </tr>
      )
    }
    return rows;
  }

  return (
    <div className={classes.root}>
      <label className={classes.title}><em>Rack {number}</em></label>
      <table className={classes.table}>
        {getRows(rack)}
      </table>
    </div>
  )
}

export default NodeTable
