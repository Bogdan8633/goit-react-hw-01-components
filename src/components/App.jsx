import Profile from './Profile/Profile';
import user from '../data/task1/user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        // stats=""
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
    </>

    // username — имя пользователя
    // tag — тег в социальной сети без @
    // location — город и страна
    // avatar — ссылка на изображение
    // stats — объект с информацией об активности

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
