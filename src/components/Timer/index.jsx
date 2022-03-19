import { useState } from 'react';
import TimerButton from '../TimerButton';

import './styles.css';



const Timer = () => {
  const [timer, setTimer] = useState({
    minutes: 25,
    seconds: 0
  });
  const [intervalTimer, setIntervalTimer] = useState(null);
  
  const [isOn, setIsOn] = useState(false);


  const calculateTimer = (timer) => {
    let seconds = timer.seconds;
    let minutes = timer.minutes;

    if(seconds > 0) {
      seconds = timer.seconds - 1;
      return {
        minutes: timer.minutes,
        seconds
      }
    }
    
    if(seconds === 0) {
      if(minutes === 0) {
        clearInterval(intervalTimer);
      } else {
        minutes = timer.minutes - 1;
        return {
          minutes,
          seconds: 59
        }
      }
    }
  }

  const startTimer = () => {
    if(isOn === true) {
      return;
    }
    
    const interval = setInterval(() => {
      setTimer(calculateTimer);
    }, 1000);

    setIntervalTimer(interval);
    setIsOn(true);
  }

  const stopTimer = () => {
    clearInterval(intervalTimer);
    setIsOn(false);
  }

  const resetTimer = () => {
    stopTimer();
    setTimer({
      minutes: 25,
      seconds: 0
    })
  }


  return (
    <div className='timer-container'>
      <div className='timer-display'>
        {timer.minutes}:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
      </div>
      <div className='timer-button-container' aria-label='Container action' data-testid="container-button">
        <TimerButton buttonAction={startTimer} buttonValue="Start"/>
        <TimerButton buttonAction={stopTimer} buttonValue="Stop"/>
        <TimerButton buttonAction={resetTimer} buttonValue="Reset"/>
      </div>
    </div>
  )
}

export default Timer;