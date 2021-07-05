import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.5em',
    alignContent: 'center'
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.25em'
  },
  dot: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  span: {
    margin: '0.5em'
  }
}));

const Legend = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <div className={classes.div}>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#78AD32' }}></span> Allocated </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#E98B15' }}></span> Idle </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#3D6171' }}></span>  Drained </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#9AAB99' }}></span> Draining </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#DC391A' }}></span> Down </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#463C3E' }}></span> Reserved </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#166137' }}></span> Mix</span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#b9b7bd' }}></span> Empty</span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#313628' }}></span> Other</span>
        </div>
      </Paper>
    </div>
  )
}

export default Legend
