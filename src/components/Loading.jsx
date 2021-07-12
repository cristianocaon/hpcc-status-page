import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePromiseTracker } from "react-promise-tracker";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },

  },
}));

const Loading = () => {
  const classes = useStyles();
  // const { promiseInProgress } = usePromiseTracker();
  return (
    // promiseInProgress &&
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export default Loading
