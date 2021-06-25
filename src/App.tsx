import "./App.css";
import { logoImageBase64 } from "utils/constants";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/themes/default.theme";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <div className="App">
      <img src={logoImageBase64} alt="" />
    </div>
  </ThemeProvider>
);

export default App;
