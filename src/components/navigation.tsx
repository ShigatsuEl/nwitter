import React from "react";
import { Link } from "react-router-dom";

interface INavigationProps {
  user: firebase.default.User | null;
}

export const Navigation: React.FC<INavigationProps> = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">{user?.displayName}'s Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
