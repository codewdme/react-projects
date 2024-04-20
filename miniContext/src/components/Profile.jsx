import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please Login!</h1>;

  return <p className="text-3xl font-black p-4">Welcome {user.userName}</p>;
}

export default Profile;
