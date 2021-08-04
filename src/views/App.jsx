import React, { useState } from 'react'
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '1rem',
    color: '#3D6171'
  },
  icon: {
    marginLeft: '0.3rem',
    '&:hover': {
      cursor: 'pointer',
    }
  }
}));

const App = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    window.location.reload();
  }

  return (
    <div className="App">
      <div className={classes.info}>
        <label>Refreshing automatically every 2 minutes</label>
        <IconButton size="small" onClick={handleRefresh} className={classes.icon}><FontAwesomeIcon icon={faSync} /></IconButton>
      </div>
      <Header value={value} handleChange={handleChange} />
      <Content value={value} />
    </div>
  );
};

export default App;