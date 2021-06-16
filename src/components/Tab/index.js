import { Container, TabButton } from './styles';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Summary from '../Summary/index';

export default function Tab() {
  return (
    <Router>
      <div>
        <Container>
          <TabButton to="../Summary/index">Summary</TabButton>
          <TabButton>Jobs</TabButton>
          <TabButton>Nodes</TabButton>
        </Container>
        <Switch>
          <Route path="/Summary">
            <Summary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}