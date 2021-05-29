import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../styles/theme";
import CvScreen from "./CvScreen";

export type CvScreenClasses = "cvScreenWrapperStyles" | "printButton";

export enum CvTypes {
  English = "English",
  Swedish = "Swedish"
}

interface Props {
  cvVersion: CvTypes;
}

const CvScreenWrapper: React.FC<Props> = ({ cvVersion }): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:960px)");

  const cvScreenStyles = makeStyles({
    cvScreenWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      minHeight: "calc(100vh - 52px)",
      marginTop: "52px",
      width: smallScreen ? "100vw" : "calc(100vw - 240px)",
      marginLeft: smallScreen ? "0px" : "240px",
      padding: "1rem"
    },
    printButton: {
      marginBottom: theme.customSpacings.s
    }
  });

  const styles = cvScreenStyles();

  return <CvScreen styles={styles} cvVersion={cvVersion} />;
};

export default CvScreenWrapper;
