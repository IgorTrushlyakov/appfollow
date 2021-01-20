import React, { useContext } from 'react';
import { CommentContext } from '../../App';

import styles from './Header.module.css';

const Header = ({ selectUser }: { selectUser(userName: string): void }) => {
  const selectedUser = useContext(CommentContext);

  return (
    <div className={styles.title}>
      <h2>Комментарии</h2>
      {
        Boolean(selectedUser) && (
          <>
            <span className={styles.titleName}>{selectedUser}</span>
            <div className={styles.clearBtn} onClick={() => selectUser('')}>✖</div>
          </>
        )
      }
    </div>
  )
}

export default Header;
