const { errors, jobs } = require('../data/jobs.json')

const requestJobs = () => {
  return !errors ? { jobs } : { jobs, errors };

}

export default requestJobs;