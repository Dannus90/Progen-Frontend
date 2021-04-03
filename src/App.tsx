import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/theme/index";
import "./styles/theme/global.scss";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { CssBaseline } from "@material-ui/core";
import { I18nextProvider } from "react-i18next";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./ApolloClient";
import i18next from "./i18NextSetup";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <ApolloProvider client={apolloClient}>
          <ApplicationRoutes />
        </ApolloProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
