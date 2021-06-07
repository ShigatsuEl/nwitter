import { dbService, storeService } from "fb";
import firebase from "firebase";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Nweets } from "components/nweets";

interface IHomeProps {
  user: firebase.User | null;
}

export interface INweet {
  id: string;
  createdAt?: Date;
  creatorId?: string;
  text?: string;
}

export const Home: React.FC<IHomeProps> = ({ user }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState<INweet[]>([]);
  const [attachment, setAttachment] = useState<string | null>("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (attachment !== null && attachment !== "") {
      const fileRef = storeService.ref().child(`${user?.uid}/${uuidv4()}`);
      const response = await fileRef.putString(attachment, "data_url");
      console.log(response);
    }
    /* if (nweet !== "") {
      await dbService.collection("nweets").add({
        text: nweet,
        createdAt: Date.now(),
        creatorId: user!.uid,
      });
    }
    setNweet(""); */
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    let changeFile;
    if (files) {
      changeFile = files[0];
    } else {
      changeFile = null;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setAttachment(reader.result as string | null);
    };
    if (changeFile) {
      reader.readAsDataURL(changeFile);
    }
  };

  const onClearAttachment = () => {
    setAttachment(null);
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
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
        <input
          ref={inputFileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <input type="submit" value="Nweet" onChange={onChange} />
        {attachment && (
          <div>
            <img src={attachment} alt={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweets key={nweet.id} nweet={nweet} user={user} />
        ))}
      </div>
    </div>
  );
};
