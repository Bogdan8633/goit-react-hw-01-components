import PropTypes from 'prop-types';

import styles from './friend-list-item.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className={styles.item}>
      <span
        className={
          isOnline
            ? `${styles.status} ${styles.online}`
            : `${styles.status} ${styles.offline}`
        }
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
