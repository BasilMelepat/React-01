import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import SignupBox from './SignupBox.js';
import LoginBox from './LoginBox.js';

function App() {
  return (
    <div className="App">
    <>
      <Navbar/>
      <LoginBox/>
      <SignupBox/>
      <Footer/>
    </>
    </div>
  );
}

export default App;