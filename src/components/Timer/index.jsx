import { useState } from 'react';
import TimerButton from '../TimerButton';

import './styles.css';

const Timer = () => {

  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const startTimer = () => {
    console.log('Starting timer');
  }

  const stopTimer = () => {
    console.log('Stop timer');
  }

  const resetTimer = () => {
    console.log('Reset timer');
  }


  return (
    <div className='timer-container'>
      <div className='timer-display'></div>
      <div className='timer-button-container'>
        <TimerButton buttonAction={startTimer} buttonValue="Start"/>
        <TimerButton buttonAction={stopTimer} buttonValue="Stop"/>
        <TimerButton buttonAction={resetTimer} buttonValue="Reset"/>
      </div>
    </div>
  )
}

export default Timer;