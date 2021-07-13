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
      <span className={classes.dot} style={{ backgroundColor: '#78AD32' }}></span><span> Allocated </span>
      <span className={classes.dot} style={{ backgroundColor: '#E98B15' }}></span><span> Idle </span>
      <span className={classes.dot} style={{ backgroundColor: '#3D6171' }}></span><span>  Drained </span>
      <span className={classes.dot} style={{ backgroundColor: '#9AAB99' }}></span><span> Draining </span>
      <span className={classes.dot} style={{ backgroundColor: '#DC391A' }}></span><span> Down </span>
      <span className={classes.dot} style={{ backgroundColor: '#463C3E' }}></span><span> Reserved </span>
      <span className={classes.dot} style={{ backgroundColor: '#166137' }}></span><span> Mix</span>
      <span className={classes.dot} style={{ backgroundColor: '#b9b7bd' }}></span><span> Empty</span>
      <span className={classes.dot} style={{ backgroundColor: '#313628' }}></span><span> Other</span>
    </div>
  )
}

export default Legend
