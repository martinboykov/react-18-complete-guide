import { useState, useRef } from 'react';
import ResultModul from './ResultModul';

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;
  const interval = 10;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining((prevTimeRemaining) => prevTimeRemaining - interval);
    }, interval);
  }
  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimerRemaining(targetTime * 1000);
  }
  return (
    <>
      <ResultModul
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timerRemaining}
        onReset={handleReset}></ResultModul>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
