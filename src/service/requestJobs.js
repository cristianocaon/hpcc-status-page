// Use later for server request
// import axios from 'axios';

const jobs = require('../data/jobs.json')

const requestJobs = () => {
  // console.log(jobs);
  return jobs;
}

export default requestJobs;