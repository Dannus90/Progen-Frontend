import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import CreateCv from "./CreateCv";

export interface CreateCvComponentStyles extends Theme {
  createCvComponentStyles: CreateCSSProperties | CSSProperties;
}

export type CreateCvComponentClasses = "createCvWrapperStyles";

const CreateCvComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const createCvComponentStyles = makeStyles({
    createCvWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`
    }
  });

  const styles = createCvComponentStyles();

  return <CreateCv styles={styles} />;
};

export default CreateCvComponentWrapper;
