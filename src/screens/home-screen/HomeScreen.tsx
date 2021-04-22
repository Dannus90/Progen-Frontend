import React, { useMemo, useState } from "react";
import { HomeScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { TabPanel } from "../../components/common/tab-panel/TabPanel";
import Profile from "../../components/home-screen-components/profile/index";
import CreateCv from "../../components/home-screen-components/create-cv/index";
import CvInformation from "../../components/home-screen-components/cv-information/index";
import Account from "../../components/home-screen-components/account/index";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useDispatch } from "react-redux";
import { accountClicked } from "../../redux/reducers/user-data/generalReducer";

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
  const { generalState } = useAppSelector((state) => state);
  const dispatch = useDispatch();

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

  useMemo(() => {
    console.log(currentTab);
    if (generalState.accountClicked) {
      setCurrentTab(1);
    }
  }, [generalState.accountClicked]);

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
      <TabPanel {...getTabPanelProps(currentTab, 0)}>
        <Profile />
      </TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 1)}>
        <Account />
      </TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 2)}>
        <CvInformation />
      </TabPanel>
      <TabPanel {...getTabPanelProps(currentTab, 3)}>
        <CreateCv />
      </TabPanel>
    </div>
  );
};

export default HomeScreen;
