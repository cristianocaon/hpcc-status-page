import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  timer: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '10px',
    color: '#3D6171'
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Header />
        <label className={classes.timer}>Update request for data: {Date.now()}</label>
        <Content />
      </Router>
    </div>
  );
};

export default App;