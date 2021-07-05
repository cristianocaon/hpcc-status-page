// Use later for server request
// import axios from 'axios';

const nodes = require('../data/nodes.json')

const requestNodes = () => {
  // console.log(nodes);
  return nodes;
}

export default requestNodes;