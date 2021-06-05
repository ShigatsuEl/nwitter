import { authService, firebaseInstance } from "fb";
import React, { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let data;
      if (isCreateAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleMethod = () => {
    setIsCreateAccount((current) => !current);
  };

  const onSocialClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const target = event.target as HTMLButtonElement;
      let provider:
        | firebase.default.auth.GoogleAuthProvider
        | firebase.default.auth.GithubAuthProvider;
      if (target.name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (target.name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      const data = await authService.signInWithPopup(provider!);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input
          type="submit"
          value={isCreateAccount ? "Create Account" : "Log In"}
        />
      </form>
      <span>{error}</span>
      <h6
        onClick={toggleMethod}
        style={{ fontSize: "1rem", margin: 0, cursor: "pointer" }}
      >
        {isCreateAccount
          ? "Already have an account? Log In"
          : "Don’t have an account? Create account"}
      </h6>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
