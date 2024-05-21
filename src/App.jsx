import React from 'react';
import BarChart from './Components/BarChart';


const App = () => {
  const chartData = {
    labels: ['Patient', 'Doctors', 'Nurses',],
    values: [100, 25, 15,],
  };

  return (
    <div style={{width:"300px"}}>
      <h1>React Bar Chart</h1>
      <BarChart data={chartData} />
    </div>
  );
};

export default App;
