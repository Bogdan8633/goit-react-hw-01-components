import Profile from './Profile/Profile';
import user from '../data/task1/user.json';
import data from '../data/task2/data.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import list from '../data/task3/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/task4/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="UPLOAD STATS" stats={data}></Statistics>
      <Statistics stats={data} />
      <FriendList friends={list}></FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
};
