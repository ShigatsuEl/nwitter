import { AuthForm } from "components/auth-form";
import { authService, firebaseInstance } from "fb";
import React, { useState } from "react";

export const Auth = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(true);

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
      <AuthForm isCreateAccount={isCreateAccount} />
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
