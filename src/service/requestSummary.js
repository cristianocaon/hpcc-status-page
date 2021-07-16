import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';
const URL = PROTO + ADDR + ':' + PORT + '/slurm-web/summary';

const requestSummary = async (setData, setLoading, setError) => {
  try {
    const { data } = await axios.get(URL)
    if (!data.error) {
      let { charts, partitions } = data;
      setData({ charts, partitions });
    } else {
      setError(data.error);
    }
    setLoading(false);
  } catch (err) {
    console.error(err.message);
  }
};

export default requestSummary;