import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CvInformationComponentClasses } from "./index";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { TabPanel, a11yProps } from "./TabPanel";
import TabsDivider from "../ui-components/cv-information-screen-components/cv-information-tabs-divider/index";
import { useTranslation } from "react-i18next";
import AboutMe from "../ui-components/cv-information-screen-components/about-me/index";
import WorkExperience from "../ui-components/cv-information-screen-components/work-experience/index";
import Education from "../ui-components/cv-information-screen-components/education/index";
import Skills from "../ui-components/cv-information-screen-components/skills/index";
import CertificatesLicenses from "../ui-components/cv-information-screen-components/certificates-licenses/index";
import Other from "../ui-components/cv-information-screen-components/other/index";

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
          style={{ width: 300 }}
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
          <AboutMe />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <WorkExperience />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <CertificatesLicenses />
        </TabPanel>
        <TabPanel value={value} index={10}>
          <Other />
        </TabPanel>
      </Paper>
    </div>
  );
};

export default CvInformationComponent;
