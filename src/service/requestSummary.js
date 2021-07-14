// const { charts, error, partitions } = require('../data/summary.json')

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';
const URL = PROTO + ADDR + ':' + PORT + '/slurm-web/summary';

const requestSummary = () => {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log("Success!")
      console.log(data)
      const { charts, error, partitions } = data;
      return !error ? { charts, partitions } : { charts, partitions, error };
    })
    .catch(err => console.log("Fetch error: " + err.message));
}

export default requestSummary;