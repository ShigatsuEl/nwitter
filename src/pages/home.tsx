import { dbService } from "fb";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Nweets } from "components/nweets";
import { NweetFactory } from "components/nweet-factory";

interface IHomeProps {
  user: firebase.User | null;
}

export interface INweet {
  id: string;
  createdAt?: Date;
  creatorId?: string;
  text?: string;
  fileUrl?: string;
}

export const Home: React.FC<IHomeProps> = ({ user }) => {
  const [nweets, setNweets] = useState<INweet[]>([]);

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
      <NweetFactory user={user} />
      <div>
        {nweets.map((nweet) => (
          <Nweets key={nweet.id} nweet={nweet} user={user} />
        ))}
      </div>
    </div>
  );
};
