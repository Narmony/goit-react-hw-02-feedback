import styles from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <h2 className={styles.message}>{message}</h2>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
