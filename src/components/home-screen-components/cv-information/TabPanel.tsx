import { Box, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  value: number;
  index: number;
}

export const TabPanel: React.FC<Props> = ({ children, value, index, ...rest }): JSX.Element => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{ width: "100%" }}
      aria-labelledby={`vertical-tab-${index}`}
      {...rest}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface ReturnObject {
  id: string;
  "aria-controls": string;
}

export const a11yProps = (index: number): ReturnObject => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
};
