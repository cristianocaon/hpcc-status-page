import { getJobs } from '../services/api';
import jobs from '../services/jobs';

export const parseJobStatus = () => {
  const jobs = getJobs('../services/jobs');
  console.log(jobs);
}


