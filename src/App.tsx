import { ThemeProvider } from "@mui/material/styles";
import Routers from "./config/Routers";
import GlobalStyle from "./layout/styles";
import { theme } from "./layout/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
