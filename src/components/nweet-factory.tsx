import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label htmlFor="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      {file && (
        <div className="factoryForm__attachment">
          <img
            src={file}
            style={{
              backgroundImage: file,
            }}
            alt="file-img"
          />
          <div className="factoryForm__clear" onClick={onClearFile}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};
