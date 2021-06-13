import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService, storeService } from "fb";
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
      if (nweet.fileUrl) await storeService.refFromURL(nweet.fileUrl).delete();
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
    <div className="nweet">
      {isEditing ? (
        <React.Fragment>
          {user?.uid === nweet.creatorId && (
            <React.Fragment>
              <form onSubmit={onSubmit} className="container nweetEdit">
                <input
                  type="text"
                  value={newNweetText}
                  placeholder="Edit your Nweet"
                  required
                  autoFocus
                  onChange={onChange}
                  className="formInput"
                />
                <button className="formBtn">Update</button>
              </form>
              <button onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </button>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h4>{nweet.text}</h4>
          {user?.uid === nweet.creatorId && (
            <div className="nweet__actions">
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          )}
          {nweet.fileUrl && <img src={nweet.fileUrl} alt={nweet.id} />}
        </React.Fragment>
      )}
    </div>
  );
};
