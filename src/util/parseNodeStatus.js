const parseNodeStatus = (nodes) => {
  return nodes.nodes.slice(0, 120).map(obj => {
    return { node: obj.hostname, state: obj.state }
  });
}

export default parseNodeStatus;