import { ThemeProvider } from "styled-components";

import { TransactionsContextProvider } from "./contexts/TransactionsContextProvider";

import { Transactions } from "./pages/Transactions";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}
