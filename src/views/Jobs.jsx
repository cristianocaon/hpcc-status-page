import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import requestJobs from '../data/requestJobs';

const useStyles = makeStyles(_ => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  }
}));

const Jobs = () => {
  const classes = useStyles();

  const jobs = requestJobs();
  let fields = undefined;
  let data2 = undefined;

  if (jobs.errors === "") {
    fields = Object.keys(jobs.jobs[0]).filter(job => {
      return job !== 'nodelist';
    }).map(column => {
      let header = column.toUpperCase();
      let width = column.length < 6 ? 110 : column.length < 7 ? 120 : column.length < 9 ? 140 : 150;
      if (column === 'jobid') {
        column = 'id';
        header = 'JOBID';
      }
      return ({
        field: column,
        headerName: header,
        width: width,
      });
    });

    data2 = jobs.jobs.map(obj => {
      let { jobid, ...data } = obj;
      data["id"] = jobid;
      return data;
    });

    console.log(fields);
    console.log(data2);
  } else {
    // Change this to display on interface
    console.log(jobs.errors);
  }

  return (
    <div>
      <div className={classes.root}>
        <DataGrid
          rows={data2}
          columns={fields}
          pageSize={8}
          autoHeight={true}
          disableColumnMenu={true}
        />
      </div>
    </div>
  );
}

export default Jobs