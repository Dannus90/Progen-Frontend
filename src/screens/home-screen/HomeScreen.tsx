import React, { useState } from "react";
import { HomeScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { TabPanel } from "../../components/common/tab-panel/TabPanel";

interface Props {
  styles: ClassNameMap<HomeScreenClasses>;
}

interface TabProps {
  id: string;
  "aria-controls": string;
}

const HomeScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("home");
  const [currentTab, setCurrentTab] = useState(0);

  const getTabProps = (index: number): TabProps => {
    return {
      id: `home-tab-${index}`,
      "aria-controls": `home-tabpanel-${index}`
    };
  };

  const getTabPanelProps = (tab: number, index: number) => {
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
      <AppBar color="transparent" position="static" className={styles.tabsStyle}>
        <Tabs
          indicatorColor="primary"
          value={currentTab}
          onChange={handleTabChange}
          aria-label="home tabs">
          <Tab label={t("tabs.profile")} {...getTabProps(0)} />
          <Tab label={t("tabs.account")} {...getTabProps(1)} />
          <Tab label={t("tabs.baseCv")} {...getTabProps(2)} />
          <Tab label={t("tabs.createCv")} {...getTabProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel {...getTabPanelProps(currentTab, 0)}>Profile</TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 1)}>Account</TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 2)}>CV Information</TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 3)}>Create CV</TabPanel>
    </div>
  );
};

export default HomeScreen;
