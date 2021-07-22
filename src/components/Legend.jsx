import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex_direction: 'row',
    justifyContent: 'center',
    margin: '2rem',
    alignContent: 'center',
    '& span': {
      fontFamily: 'Roboto, sans-serif',
      margin: '0.5rem',
      justifyContent: 'center',
    },
  },
  dot: {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    display: 'inline-block',
  }
}));

const Legend = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.dot} style={{ backgroundColor: '#2d6a4f' }}></span><span> Fully Allocated </span>
      <span className={classes.dot} style={{ backgroundColor: '#52b788' }}></span><span> Partially Allocated </span>
      <span className={classes.dot} style={{ backgroundColor: '#a9def9' }}></span><span> Idle </span>
      <span className={classes.dot} style={{ backgroundColor: '#9d4edd' }}></span><span> Drained </span>
      <span className={classes.dot} style={{ backgroundColor: '#7b2cbf' }}></span><span> Draining </span>
      <span className={classes.dot} style={{ backgroundColor: '#ef233c' }}></span><span> Down </span>
      <span className={classes.dot} style={{ backgroundColor: '#ffd166' }}></span><span> Reserved </span>
      <span className={classes.dot} style={{ backgroundColor: '#E7E5DF' }}></span><span> Empty </span>
      <span className={classes.dot} style={{ backgroundColor: '#393E41' }}></span><span> Other </span>
    </div>
  )
}

export default Legend
