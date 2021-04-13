import React, { useState } from "react";
import { HomeScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<HomeScreenClasses>;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const HomeScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const [currentTab, setCurrentTab] = useState(1);

  const tabProps = (index: number) => {
    return {
      id: `home-tab-${index}`,
      "aria-controls": `home-tabpanel-${index}`
    };
  };

  const tabPanelProps = (tab: number, index: number) => {
    return {
      value: tab,
      index
    };
  };

  const handleTabChange = (_: any, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={styles.pageWrapperStyles}>
      <AppBar position="static">
        <Tabs value={currentTab} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Item One" {...tabProps(0)} />
          <Tab label="Item Two" {...tabProps(1)} />
          <Tab label="Item Three" {...tabProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel {...tabPanelProps(currentTab, 0)}>Item One</TabPanel>
      <TabPanel {...tabPanelProps(currentTab, 1)}>Item Two</TabPanel>
      <TabPanel {...tabPanelProps(currentTab, 2)}>Item Three</TabPanel>
    </div>
  );
};

export default HomeScreen;
