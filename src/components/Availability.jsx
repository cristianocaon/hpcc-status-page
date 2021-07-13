import React from 'react';
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from 'material-ui-popup-state/hooks'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  box: {
    border: '2px solid black',
    borderRadius: '3px',
    margin: '2px',
    marginLeft: '4px',
    marginRight: '4px',
    padding: '4px',
    color: 'white',
    '&:hover': {
      opacity: '0.5',
      transition: 'opacity .4s ease-out',
      cursor: 'pointer',
    }
  },
  paper: {
    padding: '10px',
  },
}));

const Availability = ({ partitions }) => {
  const classes = useStyles();

  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'demoPopper',
  })

  return (
    <div className={classes.root}>
      {Object.keys(partitions).map(partition => {
        return (
          <div {...bindToggle(popupState)} onMouseLeave={_ => {
            if (popupState.isOpen) {
              popupState.close();
            }
          }}>
            <Typography className={classes.box} style={{ backgroundColor: partitions[partition] === 'UP' ? 'green' : 'red' }}>
              {partition.charAt(0).toUpperCase() + partition.slice(1)}
            </Typography>
            <Popper {...bindPopper(popupState)} transition>
              <Paper className={classes.paper}>
                <Typography><strong>Status</strong>: {partitions[partition]}</Typography>
              </Paper>
            </Popper>
          </div>
        )
      })}
    </div>
  )
}

export default Availability
