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
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          autoFocus
          onChange={onChange}
          className="formInput"
        />
        <input
          type="submit"
          value="Update"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
