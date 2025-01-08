import { ThemeContextProvider } from "./context/ThemeContext"
import { Box } from "./context/Box"
function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  )
}

export default App