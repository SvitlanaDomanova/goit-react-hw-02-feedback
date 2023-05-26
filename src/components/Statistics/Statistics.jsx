import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      {total > 0 ? (
        <>
          <h2>{title}</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}
export default Statistics;

