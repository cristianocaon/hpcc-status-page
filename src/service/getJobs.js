import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';

const STATES = { Running: 'R', Pending: 'PD', Completing: 'CG' };

const getJobs = async (setData, setLoading, setError, partition, status) => {
  let URL = PROTO + ADDR + ':' + PORT + '/slurm-web/jobs';
  try {
    if (partition && partition !== 'All') {
      URL += '?partition=' + partition.toLowerCase();
      if (status in STATES) {
        URL += '&status=' + STATES[status];
      }
    } else if (status in STATES) {
      URL += '?status=' + STATES[status];
    }
    const { data } = await axios.get(URL);
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