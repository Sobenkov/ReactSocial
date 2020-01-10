import React from 'react';
import './components/css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Posts from './components/Posts';

const App = () => {
  return (  
    <div className="app-wrapper"> 
      <Header />
      <Nav />
      <Profile />
      <Posts />
        

    </div>);
}

export default App;
