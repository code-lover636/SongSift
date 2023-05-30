import React from 'react';
import '../styles/WelcomePage.scss';

import { useState } from "react";
import { auth, GoogleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

const redirect = (e, signInWithGoogle) => {
    e.preventDefault();
    console.log("hi");
    signInWithGoogle();
    
    
}  
  

const WelcomePage = () => {
  const signInWithGoogle = async() => {
    try{
    await signInWithPopup(auth,GoogleProvider);
    window.location.href = '/home';
    }
    catch(err) {
        console.error(err)
    }
};  
  return (
    <div className="welcome-page">
        <div className="wrapper">
            <h1 className="heading">SongSift</h1>
            <h2 className="sub-heading">An ML based Music Recommendation App</h2>
            <div className="login-form__input" onClick={e => redirect(e, signInWithGoogle)}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </div>  
        </div>
      <p className="welcome-page__copy-right"></p>
    </div>
  );
};

export default WelcomePage;