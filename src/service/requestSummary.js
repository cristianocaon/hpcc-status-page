const { charts, error, partitions } = require('../data/summary.json')

const requestSummary = () => {
  return !error ? { charts, partitions } : { charts, partitions, error };
}

export default requestSummary;