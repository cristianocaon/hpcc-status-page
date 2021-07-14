import axios from 'axios';

const { charts, error, partitions } = require('../data/summary.json')

const requestSummary = () => {
  const url = 'http://scarlet.hpcc.ttu.edu/slurm-web/summary';
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
  return !error ? { charts, partitions } : { charts, partitions, error };
}

export default requestSummary;