/* eslint-disable react-hooks/exhaustive-deps */
import { authService, dbService } from "fb";
import firebase from "firebase/app";
import React, { useEffect } from "react";

interface IProfileProps {
  user: firebase.User | null;
}

export const Profile: React.FC<IProfileProps> = ({ user }) => {
  const onLogOutClick = () => authService.signOut();

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", user?.uid)
      .orderBy("createdAt")
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <React.Fragment>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>
  );
};
