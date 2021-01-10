import React, {useState, useEffect} from 'react';
import Widget from './Widget';

import './Clock.css';

const minutesFormat = (time: number): string => {
  const minutesString = Math.floor(time / 60).toString();
  if (minutesString.length === 1) {
    return '0' + minutesString;
  } else {
    return minutesString;
  }
};
const secondsFormat = (time: number): string => {
  const secondsString = (time % 60).toString();
  if (secondsString.length === 1) {
    return '0' + secondsString;
  } else {
    return secondsString;
  }
};

const Clock: React.FC<{index: number}> = ({index}) => {
  const [clockRinging, setClockRinging] = useState(false);
  const [initialTime, setInitialTime] = useState(60);
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(initialTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    if (time <= 0) {
      reset();
      setClockRinging(true);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <Widget index={index}>
      <section className="clock__top-section">
        {!isActive && (
          <button
            onClick={() => {
              setInitialTime(time > 60 ? time - 60 : initialTime);
              setTime(time > 60 ? time - 60 : initialTime);
            }}
          >
            <svg
              className="clock__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
        )}
        {clockRinging ? (
          <button
              onClick={() => setClockRinging(false)}
              className="clock__display clock__ringing-clock-icon"
            >
              ⏰
            </button>
        ) : (
          <h2 className="clock__display">
            {minutesFormat(time)}:{secondsFormat(time)}
          </h2>
        )}

        {!isActive && (
          <button
            onClick={() => {
              setInitialTime(time < 30 * 60 ? time + 60 : time);
              setTime(time < 30 * 60 ? time + 60 : time);
            }}
          >
            <svg
              className="clock__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        )}
      </section>
      <section className="clock__middle-section">
        <button onClick={toggle}>
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="clock__icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="clock__icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4v16l13 -8z" />
            </svg>
          )}
        </button>
        <button onClick={reset}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="clock__icon"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        </button>
      </section>
    </Widget>
  );
};

export default React.memo(Clock);
