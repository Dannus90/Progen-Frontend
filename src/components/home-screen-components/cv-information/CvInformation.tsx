import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CvInformationComponentClasses } from "./index";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { TabPanel, a11yProps } from "./TabPanel";
import TabsDivider from "../ui-components/cv-information-screen-components/cv-information-tabs-divider/index";
import { useTranslation } from "react-i18next";

interface Props {
  styles: ClassNameMap<CvInformationComponentClasses>;
}

const CvInformationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [value, setValue] = useState(0);
  const [t] = useTranslation("cvInformation");

  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.cvInformationWrapperStyles}>
      <Paper className={styles.tabsWrapper}>
        <Tabs
          orientation="vertical"
          variant="standard"
          value={value}
          onChange={handleTabChange}
          aria-label="Vertical tabs">
          <Tab
            label={t("tabs.about")}
            {...a11yProps(0)}
            className={value === 0 ? styles.tabStyleTopSelected : styles.tabStyleTop}
          />
          <div className={styles.tabsDividerWrapper}>
            <TabsDivider />
          </div>
          <Tab
            label={t("tabs.workExperience")}
            {...a11yProps(2)}
            className={value === 2 ? styles.tabStyleCentralSelected : styles.tabStyleCentral}
          />
          <div className={styles.tabsDividerWrapper}>
            <TabsDivider />
          </div>
          <Tab
            label={t("tabs.education")}
            {...a11yProps(4)}
            className={value === 4 ? styles.tabStyleCentralSelected : styles.tabStyleCentral}
          />
          <div className={styles.tabsDividerWrapper}>
            <TabsDivider />
          </div>
          <Tab
            label={t("tabs.skills")}
            {...a11yProps(6)}
            className={value === 6 ? styles.tabStyleCentralSelected : styles.tabStyleCentral}
          />
          <div className={styles.tabsDividerWrapper}>
            <TabsDivider />
          </div>
          <Tab
            label={t("tabs.certificatesLicences")}
            {...a11yProps(8)}
            className={value === 8 ? styles.tabStyleCentralSelected : styles.tabStyleCentral}
          />
          <div className={styles.tabsDividerWrapper}>
            <TabsDivider />
          </div>
          <Tab
            label={t("tabs.otherCompetences")}
            {...a11yProps(10)}
            className={value === 10 ? styles.tabStyleBottomSelected : styles.tabStyleBottom}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={10}>
          Item Six
        </TabPanel>
      </Paper>
    </div>
  );
};

export default CvInformationComponent;
