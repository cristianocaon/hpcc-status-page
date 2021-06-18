import Filter from './Filter'
import Charts from './Charts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

export default function Summary() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Overview</h1>
      <Filter />
      <Charts />
      <div>
        <h1 className={classes.title}>Partition Name</h1>
        <Charts />
      </div>
    </div>
  );
}
