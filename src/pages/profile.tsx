/* eslint-disable react-hooks/exhaustive-deps */
import { authService, dbService } from "fb";
import firebase from "firebase/app";
import React, { useEffect, useState } from "react";

interface IProfileProps {
  user: firebase.User | null;
}

export const Profile: React.FC<IProfileProps> = ({ user }) => {
  const [displayName, setDisplayName] = useState(user?.displayName!);

  const onLogOutClick = () => authService.signOut();

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", user?.uid)
      .orderBy("createdAt")
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setDisplayName(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user?.displayName !== displayName) {
      await user?.updateProfile({
        displayName,
      });
    }
  };

  useEffect(() => {
    getMyNweets();
  }, []);

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
