import React from 'react';
import classes from './css/Profile.module.css';

const Content = () => {
  return (
	<div className={classes.content}>
     <div className={classes.horizont}>
       <img src="http://dummyimage.com/3000x250/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"/>
     </div>
        
     <div className={classes.avatar}>
       <img src="http://dummyimage.com/250x250/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"/>
       <div className={classes.profile}>
         <p>Name</p>
         <p>db</p>
         <p>Info</p>
       </div> 
     </div>

     <div>
       <h2>New posts</h2>
     </div>

     <div className={classes.posts}>
       <p className={classes.item}>Post 1</p>
       <p className={classes.item}>Post 2</p>
       <p className={classes.item}>Post 3</p>
     </div>
  </div>);
}
export default Content;