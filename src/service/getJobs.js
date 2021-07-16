import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';

const getJobs = async (setData, setLoading, setError, partition, status) => {
  let URL = PROTO + ADDR + ':' + PORT + '/slurm-web/jobs';
  try {
    if (partition && status) URL += '?partition=' + partition + '&status=' + status;
    else if (partition) URL += '?partition=' + partition;
    else if (status) URL += '?status=' + status;
    const { data } = await axios.get(URL);
    if (!data.error) {
      setData(data.jobs);
    } else {
      setError(data.error);
    }
    setLoading(false);
  } catch (err) {
    console.error(err.message);
  }
};

export default getJobs;