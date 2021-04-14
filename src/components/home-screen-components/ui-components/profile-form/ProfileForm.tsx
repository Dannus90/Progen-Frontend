import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import {
  Card,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,

  useTheme
} from "@material-ui/core";
import { MainTheme } from "../../../../styles/theme";

interface Props {
  styles: ClassNameMap<ProfileFormComponentClasses>;
}

const ProfileFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("home");
  const theme = useTheme<MainTheme>();

  return (
    <>
      <Card className={styles.profileFormWrapperStyles}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </Card>
    </>
  );
};

export default ProfileFormComponent;
