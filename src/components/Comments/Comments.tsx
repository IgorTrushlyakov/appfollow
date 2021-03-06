import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { IComment } from '../../types/Commets';
import { CommentContext } from '../../App';
import user from '../../icon/user.svg';

import styles from './Comments.module.css';

const Comments: FC<{ comments: any }> = ({ comments }) => {
  const selectedUser = useContext(CommentContext);

  return (
    <ul className={styles.commentList}>
      {
        comments.map((comment: IComment) => (
          <li
            key={comment.author}
            className={styles.comment}
          >
            <div className={classnames(styles.info, comment.author === selectedUser ? styles.infoActive : '')}>
              <div className={styles.author}>
                <img
                  src={user}
                  className={styles.userPhoto}
                  alt='user'
                />
                <span className={styles.userName}>{comment.author}</span>
              </div>
              <div className={styles.userMessage}>{comment.message}</div>
            </div>

            {
              Boolean(comment.comments.length) && (
                <Comments comments={comment.comments} />
              )
            }
          </li>
        ))
      }
    </ul>
  );
}

export default Comments;
