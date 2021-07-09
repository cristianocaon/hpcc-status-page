const { errors, nodes } = require('../data/nodes.json')

const requestNodes = () => {
  return !errors ? { nodes } : { nodes, errors };
}

export default requestNodes;