import React, { useState, createContext } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Comments from './components/Comments/Comments';
import { getUsersName } from './helpers/getUsersName';

import { comments } from './comments';

import styles from './App.module.css';

export const CommentContext = createContext('');

const App = () => {
  const users = getUsersName(comments);

  const [selectedUser, setSelectedUser] = useState<string>('')

  const selectUser = (userName: string) => setSelectedUser(userName);

  return (
    <CommentContext.Provider value={selectedUser}>
    <div className={styles.page}>
      <Header selectUser={selectUser} />

      <div className={styles.row}>
        <div className={styles.nav}>
          {
            Boolean(users.length) ? (
              <Menu users={users} selectUser={selectUser} />
            ) : (
              <div className={styles.noUser}>no users</div>
            )
          }
        </div>

        <div className={styles.content}>
          {
            Boolean(users.length) ? (
              <Comments comments={comments}/>
            ) : (
              <div>no comments</div>
            )
          }
        </div>
      </div>
    </div>
    </CommentContext.Provider>
  );
}

export default App;
