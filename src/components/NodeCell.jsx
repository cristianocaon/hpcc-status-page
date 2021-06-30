import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography';
import {
  usePopupState,
  bindHover,
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
  const generateStateColor = (state) => {
    if (state === 'allocated') return '#4E6E5D';
    else if (state === 'drain') return '#C42021';
    else if (state === 'idle') return '#F09D51';
    else if (state === 'drng') return '#B1EDE8';
    else if (state === 'down') return '#9B7EDE';
    else if (state === 'resv') return '#861657';
    else if (state === 'mix') return '#0B132B';
    else if (state === 'empty') return '#b9b7bd';
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
