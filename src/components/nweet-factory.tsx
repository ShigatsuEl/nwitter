import { dbService, storeService } from "fb";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface INweetFactoryProps {
  user: firebase.default.User | null;
}

export const NweetFactory: React.FC<INweetFactoryProps> = ({ user }) => {
  const [nweet, setNweet] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let fileUrl = null;
    if (file !== null) {
      const fileRef = storeService.ref().child(`${user?.uid}/${uuidv4()}`);
      const response = await fileRef.putString(file, "data_url");
      fileUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: user!.uid,
      fileUrl,
    };

    if (nweetObj.text !== "" || nweetObj.fileUrl !== null) {
      await dbService.collection("nweets").add(nweetObj);
      setNweet("");
      setFile("");
    }
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
      setFile(reader.result as string | null);
    };
    if (changeFile) {
      reader.readAsDataURL(changeFile);
    } else {
      setFile(null);
    }
  };

  const onClearFile = () => {
    setFile(null);
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  };

  return (
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
      {file && (
        <div>
          <img src={file} alt={file} width="50px" height="50px" />
          <button onClick={onClearFile}>Clear</button>
        </div>
      )}
    </form>
  );
};