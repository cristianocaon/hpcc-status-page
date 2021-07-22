import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'cluster.hpcc.ttu.edu';
const PORT = '80';
const PAGE = '/slurm-web';

const getNodes = async (setData, setLoading, setError, partition) => {
  let url = PROTO + ADDR + ':' + PORT + PAGE + '/nodes';

  try {
    if (partition && partition !== 'All') {
      url += '?partition=' + partition.toLowerCase();
    }
    const { data } = await axios.get(url)
    if (!data.error) {
      setData(data.nodes);
    } else {
      setError(data.error);
    }
    setLoading(false);
  } catch (err) {
    console.error(err.message);
  }
};

export default getNodes;