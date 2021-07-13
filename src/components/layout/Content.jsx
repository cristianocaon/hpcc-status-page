import Summary from '../../views/Summary';
import Jobs from '../../views/Jobs';
import Nodes from '../../views/Nodes';

const Content = ({ value }) => {
  return (
    <div>
      {value === 0 ? <Summary />
        : value === 1 ? <Jobs />
          : <Nodes />}
    </div>
  )
}

export default Content;
