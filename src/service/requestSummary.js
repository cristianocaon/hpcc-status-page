const { charts, error, partitions } = require('../data/summary.json')

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';
const URL = PROTO + ADDR + ':' + PORT + '/slurm-web/summary';

const requestSummary = () => {
  fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data));
  return !error ? { charts, partitions } : { charts, partitions, error };
}

export default requestSummary;