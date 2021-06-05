import { authService } from "fb";
import React from "react";

export const Profile = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <React.Fragment>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>
  );
};
