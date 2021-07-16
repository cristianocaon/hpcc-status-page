import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';
const URL = PROTO + ADDR + ':' + PORT + '/slurm-web/jobs';

const requestSummary = async (setData, setLoading, setError) => {
  try {
    const { data } = await axios.get(URL)
    if (!data.errors) {
      setData(data.jobs);
    } else {
      setError(data.errors);
    }
    setLoading(false);
  } catch (err) {
    console.error(err.message);
  }
};

export default requestSummary;