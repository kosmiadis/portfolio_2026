import { useEffect } from "react";
import CoreLayout from "./components/layouts/CoreLayout"
import { useTheme } from "./store/theme"

function App() {
  const { loadTheme, theme } = useTheme();

  //load potential saved theme after page loading has finished
  useEffect(() => {
    loadTheme();
  }, []);

  return <CoreLayout theme={theme} />
}

export default App
