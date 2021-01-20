import React, { SyntheticEvent, useContext } from 'react';
import classnames from 'classnames';
import { CommentContext } from '../../App';

import styles from './Menu.module.css';

const Menu = ({ users, selectUser }: { users: string[], selectUser(userName: string): void }) => {
  const selectedUser = useContext(CommentContext);

  return (
    <ul>
      {
        users.map((userName: string) => (
          <li
            key={userName}
            className={classnames(styles.menuItem, userName === selectedUser ? styles.menuItemActive : '')}
            onClick={(e: SyntheticEvent<HTMLLIElement>) => selectUser(userName)}
          >
            {userName}
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;
