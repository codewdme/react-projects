import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <h2>Login</h2>
      <input
        className="text-black rounded-lg p-2  w-[200px]"
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="username"
      />

      <input
        className="text-black rounded-lg p-2  w-[200px]"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button
        className="p-2 mb-6 rounded-xl border-white border-2 w-[200px] "
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
