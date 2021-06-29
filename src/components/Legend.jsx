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
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#4E6E5D' }}></span> Allocated </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#F09D51' }}></span> Idle </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#C42021' }}></span>  Drain </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#B1EDE8' }}></span> Draining </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#9B7EDE' }}></span> Down </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#861657' }}></span> Reserved </span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#0B132B' }}></span> Mix</span>
          <span className={classes.span}><span className={classes.dot} style={{ backgroundColor: '#b9b7bd' }}></span> Other</span>
        </div>
      </Paper>
    </div>
  )
}

export default Legend
