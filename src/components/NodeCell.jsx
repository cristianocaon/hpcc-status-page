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
    '& p': {
      fontSize: '0.7em',
    },
    padding: '0.5rem',
    border: '0.5px solid #3d403f',
    textAlign: 'center',
    '&:hover': {
      opacity: '0.5',
      transition: 'opacity .4s ease-out',
      cursor: 'pointer',
    }
  }),
  paper: {
    padding: '1rem',
  },
  text: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.7rem',
  }
})

const NodeCell = ({ children, info, colSpan }) => {
  const generateStateColor = (status) => {
    if (status === 'allocated') return '#2d6a4f';
    else if (status === 'idle') return '#168aad';
    else if (status === 'drained') return '#9d4edd';
    else if (status === 'draining') return '#7b2cbf';
    else if (status === 'down*') return '#ef233c';
    else if (status === 'reserved') return '#ffd166';
    else if (status === 'mixed') return '#52b788';
    else if (status === 'empty') return '#E7E5DF';
    else return '#393E41';
  }

  const styleProps = { backgroundColor: generateStateColor(info.status) };
  const classes = useStyles(styleProps);

  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'demoPopper',
  })

  return (
    <td className={classes.cell} colSpan={colSpan} {...bindToggle(popupState)} onMouseLeave={_ => {
      if (popupState.isOpen) {
        popupState.close();
      }
    }}>
      <Typography className={classes.text}>{children}</Typography>
      <Popper {...bindPopper(popupState)} transition>
        <Paper className={classes.paper}>
          <Typography>
            {Object.keys(info).map(field => <Typography><strong>{field}</strong>: {info[field]}</Typography>)}
          </Typography>
        </Paper>
      </Popper>
    </td >
  )
}

export default NodeCell
