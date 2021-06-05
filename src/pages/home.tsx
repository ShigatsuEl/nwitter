// import { dbService } from "fb";
import { dbService } from "fb";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState<
    { id: string; data?: string; nweet?: string }[]
  >([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      setNweets((current) => [nweetObject, ...current]);
    });
  };

  useEffect(() => {
    getNweets();
  }, []);
  console.log(nweets);
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
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>{nweet.nweet}</div>
        ))}
      </div>
    </div>
  );
};
