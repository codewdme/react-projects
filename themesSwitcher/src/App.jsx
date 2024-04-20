import "./App.css";
import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./contexts/theme";
import { ThemeBtn, Card } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlStyle = document.querySelector("html").classList;
    htmlStyle.remove("light", "dark");
    htmlStyle.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
