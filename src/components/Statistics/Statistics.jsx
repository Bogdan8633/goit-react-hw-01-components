import PropTypes from 'prop-types';

import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
      <li
        key={id}
        style={{ backgroundColor: `#${randomColor}` }}
        className={styles.item}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    );
  });
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
