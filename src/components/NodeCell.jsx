import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cell: props => ({
    backgroundColor: props.backgroundColor,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: '0.7rem',
    padding: '0.6em',
    border: '10px solid black'
  })
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
    else return '#F00'
  }

  const styleProps = { backgroundColor: generateStateColor(props.state) };

  const classes = useStyles(styleProps);

  return (
    <td className={classes.cell}>
      {props.children}
    </td>
  )
}

export default NodeCell
