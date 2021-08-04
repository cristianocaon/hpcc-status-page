import React from 'react';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  usePopupState,
  bindHover,
  bindPopper,
} from 'material-ui-popup-state/hooks'

const useStyles = makeStyles(() => ({
  box: {
    border: '2px solid black',
    borderRadius: '3px',
    margin: '2px',
    marginLeft: '1rem',
    marginRight: '1rem',
    padding: '6px',
    color: 'white',
    '&:hover': {
      opacity: '0.7',
      transition: 'opacity .3s ease-out',
    }
  },
  paper: {
    padding: '1rem',
  },
}));

const PartitionBox = ({ partition, status }) => {
  const classes = useStyles();

  const popupState = usePopupState({
    variant: 'popper',
    popupId: partition + '_popper',
  })

  return (
    <div>
      <Button
        className={classes.box}
        {...bindHover(popupState)}
        style={{ backgroundColor: status === 'UP' ? '#38b000' : '#ef233c' }}
        disableRipple>
        <Typography>{partition}</Typography>
      </Button>
      <Popper {...bindPopper(popupState)} transition>
        <Paper className={classes.paper}>
          <Typography><strong>Status</strong>: {status}</Typography>
        </Paper>
      </Popper>
    </div>
  )
}

export default PartitionBox
