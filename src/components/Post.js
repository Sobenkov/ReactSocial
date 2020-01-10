import React from 'react';
import classes from './css/Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.item}>
          <img src="http://dummyimage.com/50x50/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"/>
          <div>
            {props.message}
            <span>Like {props.like}</span>
          </div>
       </div>

     </div>);
}

export default Post;