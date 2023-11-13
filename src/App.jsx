import { ThemeProvider } from "styled-components"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 >Igreja IPC</h1>
    </ThemeProvider>

    
  )
}

export default App
