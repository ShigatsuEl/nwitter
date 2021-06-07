// import { dbService } from "fb";
import firebase from "firebase";
import { dbService } from "fb";
import React, { useEffect, useState } from "react";
import { Nweets } from "components/nweets";

interface IHomeProps {
  user: firebase.User | null;
}

export interface INweets {
  id: string;
  createdAt?: Date;
  creatorId?: string;
  text?: string;
}

export const Home: React.FC<IHomeProps> = ({ user }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState<INweets[]>([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: user!.uid,
    });
    setNweet("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nweet}
          placeholder="What's on your mind?"
          maxLength={120}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" onChange={onChange} />
      </form>
      <Nweets nweets={nweets} user={user} />
    </div>
  );
};
