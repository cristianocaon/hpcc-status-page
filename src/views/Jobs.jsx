import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import { DataGrid } from '@material-ui/data-grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { partitionItems } from '../views/Summary';
import getJobs from '../service/getJobs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1.5rem',
  },
  table: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(153, 193, 222, 0.7)',
    },
    '& .MuiDataGrid-row.Mui-even:not(:hover)': {
      backgroundColor: 'rgba(188, 212, 230, 0.3)'
    }
  },
  alert: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  }
}));

const Jobs = () => {
  const classes = useStyles();

  const [data, setData] = useState()
  const [partition, setPartition] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [fields, setFields] = useState();
  const [rows, setRows] = useState();

  const handlePartitionSelection = (event) => {
    setPartition(event.target.innerText.replace(/\n/ig, ''));
  }

  const handleStatusSelection = (event) => {
    setStatus(event.target.innerText.replace(/\n/ig, ''));
  }

  useEffect(() => {
    getJobs(setData, setLoading, setError, partition, status);
    const interval = setInterval(() => getJobs(setData, setLoading, setError, partition, status), 1000 * 60 * 2);
    return () => clearInterval(interval);
  }, [partition, status])

  useEffect(() => {
    if (data && data.length > 0) {
      setMessage('');

      let columnInfo = Object.keys(data[0]).filter(key => {
        return key !== 'nodelist';
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
          headerClassName: 'super-app-theme--header',
          width: width,
        });
      });
      setFields(columnInfo);

      let rowData = data.map(obj => {
        let { jobid, ...data } = obj;
        data["id"] = jobid;
        return data;
      });
      setRows(rowData);
    } else if (!loading) {
      setMessage('No jobs currently running.');
      setFields([]);
      setRows([]);
    }
  }, [data])

  if (!message && !error) {
    if (loading) return <Loading />
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.filterContainer}>
            <Filter title="Partition"
              partitions={partitionItems}
              onClick={handlePartitionSelection}
            />
            <Filter title="Status"
              onClick={handleStatusSelection} />
          </div>
          <div className={classes.table}>
            <DataGrid
              rows={rows}
              columns={fields}
              pageSize={50}
              autoHeight={true}
              disableColumnMenu={true}
              disableSelectionOnClick={true}
              rowsPerPageOptions={[]}
            />
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <>
        <Alert severity="error"
          className={classes.alert}>
          <AlertTitle>Error</AlertTitle>
          '{error}'
        </Alert>
        <div className={classes.filterContainer}>
          <Filter title="Partition"
            partitions={partitionItems}
            onClick={handlePartitionSelection}
          />
          <Filter title="Status"
            onClick={handleStatusSelection} />
        </div>
      </>
    )
  } else if (message) {
    return (
      <>
        <Alert severity="info"
          className={classes.alert}>
          <AlertTitle>{message}</AlertTitle>
        </Alert>
        <div className={classes.filterContainer}>
          <Filter title="Partition"
            partitions={partitionItems}
            onClick={handlePartitionSelection}
          />
          <Filter title="Status"
            onClick={handleStatusSelection} />
        </div>
      </>
    )
  }
}

export default Jobs