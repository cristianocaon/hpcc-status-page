import Summary from './Summary';
import Jobs from './Jobs';
import Nodes from './Nodes';
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
