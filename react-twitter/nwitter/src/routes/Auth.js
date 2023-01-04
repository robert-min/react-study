import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
        let data;
        if (newAccount) {
            //create Account
            data = await createUserWithEmailAndPassword(authService, email, password);
        } else {
            // login
            data = await signInWithEmailAndPassword(authService, email, password);
        } 
    } catch(error) {
        setError(error.message);
    }
 
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {target: {name}} = event;
    let provider;
    if (name === "google") {
        provider = new GoogleAuthProvider();
    } else if (name === "github"){
        provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Sign in"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create ccount"}</span>
      <div>
        <button onClick={onSocialClick} name="google">Continue to Google</button>
        <button onClick={onSocialClick} name="github">Continue to Github</button>
      </div>
    </div>
  );
};

export default Auth;
