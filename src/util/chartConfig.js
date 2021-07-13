const chartConfig = (labels, values) => {
  const state = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#63b0cd', '#39393a', '#c1b098', '#e9d2f4', '#9b9b93'],
        hoverBackgroundColor: [
          '#63b0cd',
          '#39393a',
          '#c1b098',
          '#e9d2f4',
          '#9b9b93'
        ],
        hoverOffset: 4,
      }
    ]
  }
  return state;
}

export default chartConfig;