const parseJobStatus = (jobs) => {
  // Limiting to only 20 jobs due to performance

  // *** Change later ***
  return jobs.jobs.slice(0, 20).map((job) => { return job.job_state });
}

export default parseJobStatus;
