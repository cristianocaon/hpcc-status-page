import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Tabs indicatorColor="primary" textColor="primary" aria-label="disabled tabs example" centered>
          <Link to="/">
            <Tab label="Summary" />
          </Link>
          <Link to="/jobs">
            <Tab label="Jobs" />
          </Link>
          <Link to="/nodes">
            <Tab label="Nodes" />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
};