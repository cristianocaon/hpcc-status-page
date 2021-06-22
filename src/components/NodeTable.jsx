import { nodes } from '../data/nodes';
import parseNodeStatus from '../util/parseNodeStatus';

const NodeTable = () => {

  const status = parseNodeStatus(nodes);

  return (
    <div>
      <table>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NodeTable
