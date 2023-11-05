import '../../index.css';
import css from '../FriendList/friendlist.module.css';

import { FriendListItem } from '../FriendListItem/index';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
