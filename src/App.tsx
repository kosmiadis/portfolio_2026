import CoreLayout from "./components/layouts/CoreLayout"
import { useTheme } from "./store/theme"

function App() {
  const { theme } = useTheme();

  return <CoreLayout theme={theme} />
}

export default App
