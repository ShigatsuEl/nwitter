import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthForm } from "components/auth-form";
import { authService, firebaseInstance } from "fb";
import React, { useState } from "react";

export const Auth = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const [error, setError] = useState("");

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
      await authService.signInWithPopup(provider!);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm
        isCreateAccount={isCreateAccount}
        setIsCreateAccount={setIsCreateAccount}
        error={error}
        setError={setError}
      />
      <div className="authBtns">
        <button name="google" onClick={onSocialClick} className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" onClick={onSocialClick} className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
