// import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
  // countTotalFeedback,
  // countPositiveFeedbackPercentage,
}) => {
  // const total = countTotalFeedback();
  // const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <div className={styles.stats}>
      <ul className={styles.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
