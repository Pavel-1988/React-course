import { TaskTitle } from 'components/TaskTitle/TaskTitle'
import {Profile} from 'components/Profile/Profile'
import user from '../data/user.json'

export const App = () => {
  return (
      <>
      <TaskTitle text="1. Profile" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TaskTitle text="2. Statistics" />
      <TaskTitle text="3. FriendList" />
      <TaskTitle text="4. TransactionHistory" />
      </>
    
  );
};
