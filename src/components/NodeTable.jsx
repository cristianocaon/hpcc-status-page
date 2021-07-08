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
    tableLayout: 'fixed',
    width: '275px'
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    paddingBottom: '0',
  },
  row: {
    width: '300px',
  }
}));

const NodeTable = ({ rack, number }) => {
  const classes = useStyles();

  const getRows = (rack) => {
    let rows = [];
    for (let row = Object.keys(rack).length; row > 0; row--) {
      rows.push(
        <tr className={classes.row}>
          {rack[row].map(obj => {
            if (rack[row].length === 1) {
              if (obj) {
                return <NodeCell info={obj} colSpan={4}>{obj.nodename}</NodeCell>
              } else {
                return <NodeCell info={{ status: 'empty' }} colSpan={4}>{'-------'}</NodeCell>

              }
            } else {
              if (obj) {
                return <NodeCell info={obj} colSpan={1}>{obj.nodename}</NodeCell>
              } else {
                return <NodeCell info={{ status: 'empty' }} colSpan={1}>{'-------'}</NodeCell>

              }
            }
          })}
        </tr>
      )
    }
    return rows;
  }

  return (
    <div className={classes.root}>
      <label className={classes.title}><em>{number}</em></label>
      <table className={classes.table}>
        {getRows(rack)}
      </table>
    </div>
  )
}

export default NodeTable
