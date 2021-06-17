import Filter from './Filter'
import MainChart from './MainChart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  }
}));

export default function Summary() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h1 className={classes.root}>Overview</h1>
        <Filter />
        <MainChart />
      </div>
    </div>
  );
}
