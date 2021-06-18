const chartConfig = (data) => {
  const state = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Status',
        backgroundColor: ['#63b0cd', '#39393a', '#c1b098', '#e9d2f4', '#9b9b93'],
        hoverBackgroundColor: [
          '#63b0cd',
          '#39393a',
          '#c1b098',
          '#e9d2f4',
          '#9b9b93'
        ],
        data: Object.values(data)
      }
    ]
  }
  return state;
}

export default chartConfig;