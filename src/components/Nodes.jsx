import { makeStyles } from '@material-ui/core/styles'

import NodeTable from './NodeTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  },
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
      <NodeTable />
    </div>
  );
}

export default Nodes;