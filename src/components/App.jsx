import Profile from './Profile/Profile';
import user from '../data/task1/user.json';
import data from '../data/task2/data.json';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="UPLOAD STATS" stats={data}></Statistics>
    </>
  );
};
