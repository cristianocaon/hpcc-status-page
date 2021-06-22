import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div style={{ position: 'block' }}>
      <Pie
        data={data}
        height={250}
        width={500}
        options={{
          responsive: true,
          legend: {
            display: true,
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default PieChart;