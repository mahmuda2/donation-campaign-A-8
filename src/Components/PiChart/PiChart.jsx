import  { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getDonationStoredAmount } from "../../Components/Utility/LocalStorage"

const PiChart = () => {
  const [localStorageData, setLocalStorageData] = useState([]);

  
  useEffect(() => {
    const storedDonationAmounts = getDonationStoredAmount();
    setLocalStorageData(storedDonationAmounts);
  }, []);

  const totalDonations = 12;
  const dynamicDonations = localStorageData.length; 
  const remainingDonations = totalDonations - dynamicDonations;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" fontSize={24} fontWeight={'bold'} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  
  const totalDonationsPercentage = (remainingDonations / totalDonations) * 100;
  const dynamicDonationsPercentage = (dynamicDonations / totalDonations) * 100;

  const data = [
    { name: 'Your Donation', value: dynamicDonationsPercentage },
    { name: 'Remaining Donation', value: totalDonationsPercentage },
  ];

  const colors = ['#FF444A', '#00C49F'];

  return (
    <div className='container mx-auto'>
      
      <PieChart width={1400} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={700}
          cy={220}
          outerRadius={185}
          fill="#8884d8"
          labelLine={false} 
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={120} />
      </PieChart>
      
    </div>
  );
};

export default PiChart;
