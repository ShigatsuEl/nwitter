import firebase from "firebase";
import React from "react";
import { INweets } from "../pages/home";

interface INweetsProps {
  className?: string;
  nweets: INweets[];
  user: firebase.User | null;
}

export const Nweets: React.FC<INweetsProps> = ({ className, nweets, user }) => (
  <div className={className}>
    {nweets.map((nweet) => (
      <div key={nweet.id}>
        <h4>{nweet.text}</h4>
        {user?.uid === nweet.creatorId && (
          <React.Fragment>
            <button>Edit</button>
            <button>Delete</button>
          </React.Fragment>
        )}
      </div>
    ))}
  </div>
);
