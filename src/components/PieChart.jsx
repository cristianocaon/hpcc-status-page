import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart = ({ data }) => {
  Chart.register(ChartDataLabels);
  Chart.defaults.set('plugins.datalabels', {
    color: '#FE777B'
  });
  Chart.defaults.plugins.legend.display = true;
  Chart.defaults.plugins.legend.position = 'left';
  Chart.defaults.plugins.legend.labels.font = 'Roboto';
  Chart.defaults.plugins.legend.labels.textAlign = 'left';
  Chart.defaults.plugins.legend.align = 'center';
  return (
    <div>
      <Pie
        data={data}
        height={240}
        width={480}
        options={{
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
            },
          },
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 13,
                }
              }
            },
            datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'start',
              offset: -10,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 25,
              backgroundColor: (context) => {
                return context.dataset.backgroundColor;
              },
              font: {
                weight: 'bold',
                size: '12'
              },
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                  sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
              },
              color: '#fff',
            }
          },
        }}
      />
    </div>
  );
}

export default PieChart;