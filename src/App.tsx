import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/theme/index";
import "./styles/theme/global.scss";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { CssBaseline } from "@material-ui/core";
import { I18nextProvider } from "react-i18next";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./ApolloClient";
import { Provider as ReduxProvider } from "react-redux";
import i18next from "./i18NextSetup";
import { store } from "./redux/store";

const App = (): JSX.Element => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <I18nextProvider i18n={i18next}>
          <ApolloProvider client={apolloClient}>
            <ApplicationRoutes />
          </ApolloProvider>
        </I18nextProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
