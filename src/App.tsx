import { ThemeProvider } from "styled-components"
import { TrasanctionProvider } from "./contexts/Trasactions"
import { Transactions } from "./Pages/Transactions"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TrasanctionProvider>
        <GlobalStyle />
        <Transactions />
      </TrasanctionProvider>
    </ThemeProvider>
  )
}