import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cell: props => ({
    backgroundColor: props.backgroundColor,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: '0.4rem',
    padding: '1em',
    border: '0.5px solid #3d403f'
  }),
  popover: {
    pointerEvents: 'none',
  },
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
    else return '#b9b7bd'
  }

  const styleProps = { backgroundColor: generateStateColor(props.state) };
  const classes = useStyles(styleProps);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <td
      className={classes.cell}
    >
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        className={classes.text}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.children}
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>I use Popover.</Typography>
      </Popover>
    </td>
  )
}

export default NodeCell
