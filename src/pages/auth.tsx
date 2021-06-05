import { authService } from "fb";
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
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
