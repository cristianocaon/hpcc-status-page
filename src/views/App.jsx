import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
};

export default App;