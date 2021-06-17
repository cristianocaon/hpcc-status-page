import axios from 'axios';

export const getJobs = (url) => {
  axios.get(url)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log("Ping");
    })
}
