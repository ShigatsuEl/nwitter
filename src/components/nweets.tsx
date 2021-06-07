import { dbService } from "fb";
import firebase from "firebase";
import React, { useState } from "react";
import { INweet } from "../pages/home";

interface INweetsProps {
  nweet: INweet;
  user: firebase.User | null;
}

export const Nweets: React.FC<INweetsProps> = ({ nweet, user }) => {
  const [isEditing, setEditing] = useState(false);
  const [newNweetText, setNewNweetText] = useState(nweet.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure want to delete this nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweet.id}`).delete();
    }
  };

  const toggleEditing = () => {
    setEditing((current) => !current);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewNweetText(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dbService.doc(`/nweets/${nweet.id}`).update({
      text: newNweetText,
    });
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <React.Fragment>
          {user?.uid === nweet.creatorId && (
            <React.Fragment>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  value={newNweetText}
                  placeholder="Edit your Nweet"
                  required
                  onChange={onChange}
                />
                <button>Update</button>
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h4>{nweet.text}</h4>
          {user?.uid === nweet.creatorId && (
            <React.Fragment>
              <button onClick={toggleEditing}>Edit</button>
              <button onClick={onDeleteClick}>Delete</button>
            </React.Fragment>
          )}
          {nweet.fileUrl && (
            <img src={nweet.fileUrl} alt={nweet.id} width="50" height="50" />
          )}
        </React.Fragment>
      )}
    </div>
  );
};
