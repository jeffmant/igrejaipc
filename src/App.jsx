import { ThemeProvider } from "styled-components"
import theme from "./theme"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero/Hero"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
    </ThemeProvider>
  )
}

export default App
