import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../styles/theme";
import NotFoundComponent from "./NotFound";

export type NotFoundComponentClasses = "notFoundWrapperStyles" | "pageNotFoundText";

const notFoundWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:960px)");

  const notFoundWrapperStyles = makeStyles({
    notFoundWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      minHeight: "calc(100vh - 52px)",
      marginTop: "52px",
      width: smallScreen ? "100vw" : "calc(100vw - 240px)",
      marginLeft: smallScreen ? "0px" : "240px",
      padding: theme.customSpacings.l,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    pageNotFoundText: {
      background: "linear-gradient(#102927, #445E93)",
      color: "#fff",
      fontWeight: "bold",
      padding: "1rem 2rem",
      borderRadius: "5px"
    }
  });

  const styles = notFoundWrapperStyles();

  return <NotFoundComponent styles={styles} />;
};

export default notFoundWrapper;
