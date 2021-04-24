import { Box, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  value: number;
  index: number;
}

export const TabPanel: React.FC<Props> = ({ children, value, index, ...rest }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
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

export const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
};
