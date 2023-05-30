import '../styles/LoginPage.scss';
import { useState } from "react";
import { auth, GoogleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

const redirect = (e, signInWithGoogle) => {
    e.preventDefault();
    console.log("hi");
    signInWithGoogle();
    
    
}

export const LoginPage = () => {
   

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
    <div className="login-page">
        <div  className="sign login-form">
            <h2 className="login-form__title">Log In With Google </h2>
            
            <div className="login-form__input" onClick={e => redirect(e, signInWithGoogle)}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </div>                
           
        </div>
        
    </div>
  );
};

