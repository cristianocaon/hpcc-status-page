// Use later for server request
// import axios from 'axios';

// import { summary } from './v2/summary.json';
const summary = require('../data/summary.json')

const requestSummary = () => {
  return summary;
}

export default requestSummary;