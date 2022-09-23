import React, { Fragment } from "react";
import "./Clock.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <div className="header">HAPPY BIRTHDAY</div>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p className="days">{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p className="hours">{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p className="minutes">{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p className="seconds">{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Clock;
