
import { Line} from 'react-chartjs-2';
import { Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip, Legend, Title, } from 'chart.js';
ChartJS.register(
    LineElement,
    CategoryScale
    ,LinearScale,
    PointElement,Tooltip,
    Legend,
    Title,
    
  
);

 const LineChart = ({dataDay}) => {
  const dataTepm=[Math.floor(dataDay.list[0].main.temp-273),Math.floor(dataDay.list[7].main.temp-273),Math.floor(dataDay.list[15].main.temp-273),Math.floor(dataDay.list[23].main.temp-273)
        ,Math.floor(dataDay.list[31].main.temp-273)]
const mainLabels=["Day1","Day2","Day3","Day4","Day5"];
    const data={
      labels:mainLabels,
        datasets:[{
        Tooltip:true ,
        label: 'Temperature',
        data:dataTepm,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'transparent',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 3,
        pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
        pointHoverBorderWidth: 10,
        lineTension: 0,
    }]
  
    };
    
     const options={
      plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: ' 5 day Temperature forecast',
      },
    },
        cornerRadius: 8,
        maintainAspectRatio: false,
        responsive: true, 
        
          scales: {
              x: {
                  grid: {
                      display: false,
                  },
                
              },
              y:{
                min:Math.min(...dataTepm)-3,
                max:Math.max(...dataTepm)+3,
                stepSize:1
              }
      
    }
    }
  return (
    <Line data={data}    options={options} style={{flex:'1',width:'500px',}}/>
  )

  }
export default LineChart