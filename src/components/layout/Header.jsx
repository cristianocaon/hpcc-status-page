import { useState } from 'react';
import { Link } from "react-router-dom";

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  }
  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" centered>
          <Tab label="Summary" {...a11yProps(0)} component={Link} to="/" />
          <Tab label="Jobs" {...a11yProps(1)} component={Link} to="/jobs" />
          <Tab label="Nodes" {...a11yProps(2)} component={Link} to="/nodes" />
        </Tabs>
      </Paper>
    </div>
  );
};

export default Header;