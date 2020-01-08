import React from 'react';

const Content = () => {
  return (
	<div className="content">
     <div className="horizont">
       <img src="http://dummyimage.com/3000x250/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"/>
     </div>
        
     <div className="avatar">
       <img src="http://dummyimage.com/250x250/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"/>
       <div className="profile">
         <p>Name</p>
         <p>db</p>
         <p>Info</p>
       </div> 
     </div>

     <div>
       <h2>New posts</h2>
     </div>

   </div>);
}
export default Content;