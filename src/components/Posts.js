import React from 'react';
import classes from './css/Posts.module.css';
import Post from './Post';

const Posts = () => {
  return (
	<div className={classes.posts}>
     <div>
       <h2>New posts</h2>
     </div>

     <div>
       <textarea></textarea>
       <button>Add posts</button>
       <button>Remove</button>
     </div>

     <Post message='random text' like='20'/>
     <Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, consequuntur!' like='5'/>
     <Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dicta commodi deleniti fuga nulla nihil ab. Quas velit voluptates inventore possimus eius, ipsum, rerum tempora illum id placeat est quod?' like='11'/>

  </div>);
}

export default Posts;