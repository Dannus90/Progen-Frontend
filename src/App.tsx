import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/theme/index";
import KinaMat from "./components/test-component/index";
import "./styles/theme/global.scss";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { CssBaseline } from "@material-ui/core";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <ApplicationRoutes />
    </ThemeProvider>
  );
};

export default App;
