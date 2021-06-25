import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/themes/default.theme";
import Routes from "./routes/index";
import GlobalStyles from "styles/GlobalStyles";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <div className="App">
      <Routes />
    </div>
  </ThemeProvider>
);

export default App;
