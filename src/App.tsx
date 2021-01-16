import React, { useState, SyntheticEvent } from 'react';
import classnames from 'classnames';
import { Comments } from './components/Comments/Comments';
import { getUsersName } from './helpers/getUsersName';

import { comments } from './comments';

import styles from './App.module.css';

const App = () => {
  const users = getUsersName(comments);

  const [selectedUser, setSelectedUser] = useState<string>('')

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>Комментарии</h2>
        {
          Boolean(selectedUser) && (
            <>
              <span className={styles.titleName}>{selectedUser}</span>
              <div className={styles.clearBtn} onClick={() => { setSelectedUser('') }}>✖</div>
            </>
          )
        }
      </div>

      <div className={styles.row}>
        <div className={styles.nav}>
          {
            Boolean(users.length) ? (
              <ul>
                {
                  users.map((userName: string) => (
                    <li
                      key={userName}
                      className={classnames(styles.menuItem, userName === selectedUser ? styles.menuItemActive : '')}
                      onClick={(e: SyntheticEvent<HTMLLIElement>) => {
                        setSelectedUser(userName)
                      }}
                    >
                      {userName}
                    </li>
                  ))
                }
              </ul>
            ) : (
              <div className={styles.noUser}>no users</div>
            )
          }
        </div>


        <div className={styles.content}>
          {
            Boolean(users.length) ? (
              <Comments comments={comments} selectedUser={selectedUser}/>
            ) : (
              <div>no comments</div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
