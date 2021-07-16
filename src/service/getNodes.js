import axios from 'axios'

const PROTO = 'http://';
const ADDR = 'scarlet.hpcc.ttu.edu';
const PORT = '80';
const URL = PROTO + ADDR + ':' + PORT + '/slurm-web/nodes';

const getNodes = async (setData, setLoading, setError) => {
  try {
    const { data } = await axios.get(URL)
    if (!data.error) {
      setData(data.nodes);
    } else {
      setError(data.errors);
    }
    setLoading(false);
  } catch (err) {
    console.error(err.message);
  }
};

export default getNodes;