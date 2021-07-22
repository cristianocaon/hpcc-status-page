const colors = {
  usage: ['#2d6a4f', '#ffd166', '#393E41'],
  job: ['#ffd166', '#2d6a4f', '#9d4edd', '#393E41'],
  node: ['#2d6a4f', '#168aad', '#9d4edd', '#7b2cbf', '#ef233c', '#ffd166', '#52b788', '#393E41'],
}

const chartConfig = (type, labels, values) => {
  let color;
  if (type === "usage") color = colors.usage;
  else if (type === "job") color = colors.job;
  else if (type === "node") color = colors.node;
  const state = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: color,
        hoverBackgroundColor: color,
        hoverOffset: 4,
      }
    ]
  }
  return state;
}

export default chartConfig;