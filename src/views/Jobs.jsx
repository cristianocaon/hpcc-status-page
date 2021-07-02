import { useState } from 'react';
import Filter from '../components/Filter';
import requestJobs from '../data/requestJobs';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Jobs = () => {
  const classes = useStyles();

  const [partition, setPartition] = useState("");
  const [status, setStatus] = useState("");

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText);
  }

  const handleStatusSelection = (event) => {
    setStatus(event.target.innerText);
  }

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
  } else {
    // Change this to display on interface
    console.log(jobs.errors);
  }

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.filterContainer}>
          <Filter category="partition" onClick={handlePartitionSelection} />
          <Filter category="status" onClick={handlePartitionSelection} />
        </div>
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