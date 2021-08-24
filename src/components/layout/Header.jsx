import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Header = ({ value, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#0a100d', color: '#edf2f4' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Summary" />
          <Tab label="Jobs" />
          <Tab label="Nodes" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Header;
