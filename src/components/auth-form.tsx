import { authService } from "fb";
import React, { useState } from "react";

interface IAuthForm {
  isCreateAccount: boolean;
  error: string;
  setIsCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthForm: React.FC<IAuthForm> = ({
  isCreateAccount,
  setIsCreateAccount,
  error,
  setError,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      if (isCreateAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleMethod = () => {
    setIsCreateAccount((current) => !current);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className="container">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
          onChange={onChange}
          className="authInput"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={onChange}
          className="authInput"
        />
        <input
          type="submit"
          value={isCreateAccount ? "Create Account" : "Log In"}
          className="authInput authSubmit"
        />
      </form>
      <span className="authError">{error}</span>
      <span onClick={toggleMethod} className="authSwitch">
        {isCreateAccount ? "Sign In" : "Create Account"}
      </span>
    </React.Fragment>
  );
};
