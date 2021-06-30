import Summary from '../../views/Summary';
import Jobs from '../../views/Jobs';
import Nodes from '../../views/Nodes';
import { Switch, Route } from 'react-router-dom';

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/nodes">
          <Nodes />
        </Route>
        <Route path="/">
          <Summary />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
