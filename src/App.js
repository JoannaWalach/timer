import React, {useEffect, useState} from 'react';
import './App.css';

function TimerFunction() {
  const [seconds, setTime] = useState(0);

  useEffect(() => {
  const timer =  setInterval(() => {
  setTime((seconds) => seconds + 1);
}, 1000);

return () => clearInterval(timer);
}, []);

  return (
    <div>
      <h2> Timer function:{seconds} </h2>
    </div>
  );
  }


export default TimerFunction;
