import { useState } from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Section from './Section';

const STATISTIC_NAME = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [statistics, setStatistics] = useState({
    ...STATISTIC_NAME,
  });

  function totalStatistics() {
    return Object.values(statistics).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }

  function onLeaveFeedback(options) {
    setStatistics({ ...statistics, [options]: statistics[options] + 1 });
  }

  function countPositiveFeedbackPercentage() {
    return Math.round(
      (statistics.good * 100 + statistics.neutral * 50 + statistics.bad * 0) /
        totalStatistics(),
    );
  }

  const [good, neutral, bad] = Object.keys(statistics);
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={good} onLeaveFeedback={onLeaveFeedback} />
      <FeedbackOptions options={neutral} onLeaveFeedback={onLeaveFeedback} />
      <FeedbackOptions options={bad} onLeaveFeedback={onLeaveFeedback} />

      <Statistics
        good={statistics.good}
        neutral={statistics.neutral}
        bad={statistics.bad}
        total={totalStatistics()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

export default App;
