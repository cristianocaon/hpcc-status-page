
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { jobs } from '../data/jobs';

const data = jobs.jobs.slice(0, 20).map((job) => (
  {
    id: job.job_id,
    partition: job.partition,
    user: job.user_name,
    name: job.name,
    state: job.job_state,
    qos: job.qos
  }
));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  }
}));

const columns = [
  { field: 'id', headerName: 'Job ID', width: 200 },
  { field: 'partition', headerName: 'Partition', width: 200 },
  { field: 'user', headerName: 'User', width: 200 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'state', headerName: 'State', width: 200 },
  { field: 'qos', headerName: 'QOS', width: 200 },
];

const Jobs = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Jobs Information</h1>
      <div className={classes.root}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          autoHeight={true}
        />
      </div>
    </div>
  );
}

export default Jobs