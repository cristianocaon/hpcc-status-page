// import NodeTable from './NodeTable';
import Legend from './Legend';
import TableContainer from './TableContainer';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(_ => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  }
}));

const Nodes = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Nodes Information</h1>
      <Legend />
      <TableContainer />
    </div>
  );
}

export default Nodes;