import { Pie } from 'react-chartjs-2';

const state = {
  labels: ['PD', 'R'],
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
      data: [65, 59]
    }
  ]
}

export default function PieChart() {
  return (
    <div style={{ position: 'block' }}>
      <Pie
        data={state}
        height={250}
        width={500}
        options={{
          title: {
            display: true,
            text: 'Jobs Statuses',
            fontSize: 20,
          },
          legend: {
            display: true,
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
