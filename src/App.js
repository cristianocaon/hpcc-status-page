import Header from './components/Header';
import Summary from './components/Summary';
import Jobs from './components/Jobs'
import Nodes from './components/Nodes'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact component={Summary} path="/" />
          <Route exact component={Jobs} path="/jobs" />
          <Route exact component={Nodes} path="/nodes" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
