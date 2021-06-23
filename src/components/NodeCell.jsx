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

  const color = generateStateColor(props.state);

  const cellStyle = {
    backgroundColor: color,
    color: '#fff',
    fontFamily: 'Roboto',
    padding: '0.65em'
  }

  return (
    <td style={cellStyle}>
      {props.children}
    </td>
  )
}

export default NodeCell
