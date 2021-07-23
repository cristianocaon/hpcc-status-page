import processLabel from './processLabel';

const parseSummaryData = (data) => {
  const keys = Object.keys(data);
  const labels = [];
  const values = [];
  for (let i = 0; i < keys.length; i++) {
    if (keys[i][0] !== '%' && (keys[i] !== 'total_jobs' && keys[i] !== 'total_nodes' && keys[i] !== 'total_cpu')) {
      labels.push(processLabel(keys[i]));
      values.push(Object.values(data)[i]);
    }
  }
  return [labels, values];
}

export default parseSummaryData;
