import "./App.css";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import GlobalStyles from "styles/GlobalStyles";
import useAuthContext from "hooks/UseAuthContext";

const App = () => {
  const { theme } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
