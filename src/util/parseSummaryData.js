const parseSummaryData = (jobs) => {
  const keys = Object.keys(jobs);
  const labels = [];
  const values = [];
  for (let i = 0; i < keys.length; i++) {
    if (keys[i][0] !== '%' && (keys[i] !== 'total_jobs' && keys[i] !== 'total_nodes' && keys[i] !== 'total_cpu')) {
      labels.push(keys[i]);
      values.push(Object.values(jobs)[i]);
    }
  }
  return [labels, values];
}

export default parseSummaryData;
