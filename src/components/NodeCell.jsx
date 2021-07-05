import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography';
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from 'material-ui-popup-state/hooks'

const useStyles = makeStyles({
  cell: props => ({
    backgroundColor: props.backgroundColor,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: '0.4rem',
    padding: '1em',
    border: '0.5px solid #3d403f',
    '&:hover': {
      opacity: '0.5',
      transition: 'opacity .4s ease-out',
      cursor: 'pointer',
    }
  }),
  paper: {
    padding: '10px',
  },
  text: {
    fontSize: '0.7rem',
  }
})

const NodeCell = (props) => {
  const generateStateColor = (status) => {
    if (status === 'allocated') return '#78AD32';
    else if (status === 'drained') return '#3D6171';
    else if (status === 'idle') return '#E98B15';
    else if (status === 'draining') return '#9AAB99';
    else if (status === 'down*') return '#DC391A';
    else if (status === 'reserved') return '#463C3E';
    else if (status === 'mixed') return '#166137';
    else if (status === 'empty') return '#b9b7bd';
    else return '#313628';
  }

  const styleProps = { backgroundColor: generateStateColor(props.state) };
  const classes = useStyles(styleProps);

  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'demoPopper',
  })

  return (
    <td className={classes.cell} {...bindToggle(popupState)} onMouseLeave={_ => {
      if (popupState.isOpen) {
        popupState.close();
      }
    }}>
      <Typography className={classes.text}>{props.children}</Typography>
      <Popper {...bindPopper(popupState)} transition>
        <Paper className={classes.paper}>
          <Typography>
            {Object.keys(props.info).map(field => <Typography><strong>{field}</strong>: {props.info[field]}</Typography>)}
          </Typography>
        </Paper>
      </Popper>
    </td >
  )
}

export default NodeCell
