import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { jobs } from '../data/jobs';

const data = jobs.jobs.slice(0, 20).map((job) => (
  {
    id: job.job_id,
    partition: job.partition,
    state: job.job_state,
    user: job.user_name,
    name: job.name,
    priority: jobs.priority,
    submitdate: "date",
    submittime: jobs.submit_time,
    node_count: job.node_count,
    cpus: job.cpus,
    qos: job.qos,
  }
));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  }
}));

const columns = [
  { field: 'id', headerName: 'Job ID', width: 120 },
  { field: 'partition', headerName: 'Partition', width: 140 },
  { field: 'state', headerName: 'State', width: 120 },
  { field: 'user', headerName: 'User', width: 120 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'priority', headerName: 'Priority', width: 140 },
  { field: 'submitdate', headerName: 'S. Date', width: 140 },
  { field: 'submittime', headerName: 'S. Time', width: 140 },
  { field: 'node_count', headerName: 'Nodes', width: 120 },
  { field: 'cpus', headerName: 'CPUs', width: 120 },
  { field: 'qos', headerName: 'QOS', width: 120 },
];

const Jobs = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={6}
          autoHeight={true}
        />
      </div>
    </div>
  );
}

export default Jobs