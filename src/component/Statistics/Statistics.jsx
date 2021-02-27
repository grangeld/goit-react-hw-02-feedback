import Notification from '../Notification';
import s from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistics}>
      <h3>Statistics</h3>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};

export default Statistics;
