/* eslint-disable react-hooks/exhaustive-deps */
import { authService } from "fb";
import firebase from "firebase/app";
import React, { useState } from "react";

interface IProfileProps {
  user: firebase.User | null;
  refreshUser: () => void;
}

export const Profile: React.FC<IProfileProps> = ({ user, refreshUser }) => {
  const [displayName, setDisplayName] = useState(user?.displayName!);

  const onLogOutClick = () => authService.signOut();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setDisplayName(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user && user.displayName !== displayName) {
      await user.updateProfile({
        displayName,
      });
      refreshUser();
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={onChange}
        />
        <input type="submit" value="Update" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>
  );
};
