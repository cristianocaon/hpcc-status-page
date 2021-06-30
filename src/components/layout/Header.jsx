import React from 'react';
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

const Header = () => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = React.useState("summary");

  const handleTabClick = (event, value) => {
    setSelectedTab(value);
  }

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Tabs value={selectedTab} onChange={handleTabClick} centered>
          <Link to="/" value="summary">
            <Tab label="Summary" />
          </Link>
          <Link to="/jobs" value="jobs">
            <Tab label="Jobs" />
          </Link>
          <Link to="/nodes" value="nodes">
            <Tab label="Nodes" />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
};

export default Header;