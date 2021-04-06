import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";

interface Props {
  styles: ClassNameMap<LandingScreenClasses>;
}

export type LandingScreenClasses = "pageWrapperStyles";

const Topbar: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
