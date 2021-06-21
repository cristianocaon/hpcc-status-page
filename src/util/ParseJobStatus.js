const parseJobStatus = (jobs, partition) => {
  // Limiting to only 20 jobs due to performance

  // *** Change later ***
  console.log(partition.toLowerCase());
  if (partition !== "") {
    let temp = jobs.jobs.slice(0, 20).filter(function (obj) { return obj.partition === partition.toLowerCase() });
    return temp.map((job) => { return job.job_state })
  }
  return jobs.jobs.slice(0, 20).map((job) => { return job.job_state });
}

export default parseJobStatus;
