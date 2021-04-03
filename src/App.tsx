import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/theme/index";
import KinaMat from "./components/test-component/index";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <KinaMat />
    </ThemeProvider>
  );
};

export default App;
