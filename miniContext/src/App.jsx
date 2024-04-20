import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import { Profile, Login } from "./components";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-black text-white">
        <h1>Mini Context</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
