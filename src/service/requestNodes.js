const { errors, nodes } = require('../data/v2/nodes.json')

const requestNodes = () => {
  return !errors ? { nodes } : { nodes, errors };
}

export default requestNodes;