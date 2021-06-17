import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  return (
    <div style={{ position: 'block' }}>
      <Pie
        data={props.data}
        height={250}
        width={500}
        options={{
          legend: {
            display: true,
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
