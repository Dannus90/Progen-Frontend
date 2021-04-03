import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/theme/index";
import "./styles/theme/global.scss";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { CssBaseline } from "@material-ui/core";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18NextSetup";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <ApplicationRoutes />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
