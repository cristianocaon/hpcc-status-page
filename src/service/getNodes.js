import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';

const getNodes = async (setData, setLoading, setError, partition) => {
  let URL = PROTO + ADDR + ':' + PORT + '/slurm-web/nodes';

  try {
    if (partition !== 'All') {
      URL += '?partition=' + partition.toLowerCase();
    }
    const { data } = await axios.get(URL)
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