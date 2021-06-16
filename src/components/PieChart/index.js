import { Pie } from 'react-chartjs-2';
import { Container } from './styles';

const state = {
  labels: ['PD', 'R'],
  datasets: [
    {
      label: 'Status',
      backgroundColor: ['#d72638', '#2f243a'],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000'
      ],
      data: [65, 59]
    }
  ]
}

export default function PieChart() {
  return (
    <div>
      <Container>
        <div>
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
      </Container>
    </div>
  );
}
