const parseJobStatus = (jobs) => {
  const status = jobs.jobs.forEach((job) => { job.job_state });
  return status;
}

export default parseJobStatus;
