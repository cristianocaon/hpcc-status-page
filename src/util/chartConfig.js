const colors = {
  usage: ['#2A4D14', '#FFD60A', '#393E41'],
  job: ['#FFD60A', '#2A4D14', '#613DC1', '#393E41'],
  node: ['#2A4D14', '#8EF9F3', '#613DC1', '#4E148C', '#FF1B1C', '#FFD60A', '#29BF12', '#393E41'],
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