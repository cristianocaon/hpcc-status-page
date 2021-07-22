import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'cluster.hpcc.ttu.edu';
const PORT = '80';
const PAGE = '/slurm-web';

const getSummary = async (setData, setLoading, setError) => {
  let url = PROTO + ADDR + ':' + PORT + PAGE + '/summary';

  try {
    const { data } = await axios.get(url)
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

export default getSummary;