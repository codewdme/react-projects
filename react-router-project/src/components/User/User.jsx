import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="w-full text-center text-4xl font-extrabold">
      User : {userid}
    </div>
  );
};

export default User;
