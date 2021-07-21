import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex_direction: 'row',
    justifyContent: 'center',
    margin: '20px',
    alignContent: 'center',
    '& span': {
      fontFamily: 'Roboto, sans-serif',
      margin: '0.5em',
      justifyContent: 'center',
    },
  },
  dot: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    display: 'inline-block',
  }
}));

const Legend = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.dot} style={{ backgroundColor: '#2A4D14' }}></span><span> Fully Allocated </span>
      <span className={classes.dot} style={{ backgroundColor: '#8EF9F3' }}></span><span> Idle </span>
      <span className={classes.dot} style={{ backgroundColor: '#613DC1' }}></span><span> Drained </span>
      <span className={classes.dot} style={{ backgroundColor: '#4E148C' }}></span><span> Draining </span>
      <span className={classes.dot} style={{ backgroundColor: '#FF1B1C' }}></span><span> Down </span>
      <span className={classes.dot} style={{ backgroundColor: '#FFD60A' }}></span><span> Reserved </span>
      <span className={classes.dot} style={{ backgroundColor: '#29BF12' }}></span><span> Partially Allocated </span>
      <span className={classes.dot} style={{ backgroundColor: '#E7E5DF' }}></span><span> Empty </span>
      <span className={classes.dot} style={{ backgroundColor: '#393E41' }}></span><span> Other </span>
    </div>
  )
}

export default Legend
