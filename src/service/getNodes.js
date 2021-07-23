import axios from 'axios'

const PROTO = 'https://';
const ADDR = 'cluster.hpcc.ttu.edu';
const PORT = '443';
const PAGE = '/slurm-web/nodes';

const getNodes = async (setData, setLoading, setError, partition) => {
  let url = PROTO + ADDR + ':' + PORT + PAGE;

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