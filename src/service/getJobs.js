import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'cluster.hpcc.ttu.edu';
const PORT = '80';
const PAGE = '/slurm-web';

const STATES = { Running: 'R', Pending: 'PD', Completing: 'CG' };

const getJobs = async (setData, setLoading, setError, partition, status) => {
  let url = PROTO + ADDR + ':' + PORT + PAGE + '/jobs';

  try {
    if (partition && partition !== 'All') {
      url += '?partition=' + partition.toLowerCase();
      if (status in STATES) {
        url += '&status=' + STATES[status];
      }
    } else if (status in STATES) {
      url += '?status=' + STATES[status];
    }
    const { data } = await axios.get(url);
    if (!data.error) {
      setData(data.jobs);
    } else {
      setError(data.error);
    }
    setLoading(false);
  } catch (err) {
    console.error(err);
  }
};

export default getJobs;