import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CreateCvComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<CreateCvComponentClasses>;
}

const CreateCvComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.createCvWrapperStyles}>Create Cv Component</div>;
};

export default CreateCvComponent;
