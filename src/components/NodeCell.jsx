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
    textAlign: 'center',
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
    fontFamily: 'Roboto,,ans-serif',
    fontSize: '0.7rem',
  }
})

const NodeCell = ({ children, info, colSpan }) => {
  const generateStateColor = (status) => {
    if (status === 'allocated') return '#2A4D14';
    else if (status === 'idle') return '#8EF9F3';
    else if (status === 'drained') return '#613DC1';
    else if (status === 'draining') return '#4E148C';
    else if (status === 'down*') return '#FF1B1C';
    else if (status === 'reserved') return '#FFD60A';
    else if (status === 'mixed') return '#29BF12';
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
