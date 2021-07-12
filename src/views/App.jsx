import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  info: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '10px',
    color: '#3D6171'
  },
  icon: {
    marginLeft: '10px',
    '&:hover': {
      cursor: 'pointer',
    }
  }
}));

const App = () => {
  const classes = useStyles();

  const handleRefresh = (event) => {
    event.preventDefault();
    window.location.reload();
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <label className={classes.info}>Refreshing automatically every 2 minutes
          <a onClick={handleRefresh}><FontAwesomeIcon icon={faSync} className={classes.icon} /></a>
        </label>
        <Content />
      </Router>
    </div>
  );
};

export default App;