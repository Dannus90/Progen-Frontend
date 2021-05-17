import React, { useEffect, useState } from "react";
import withStyles, { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountComponentClasses } from "./index";
import { useDispatch } from "react-redux";
import { Button, Card, Container, Grid, TextField, Typography } from "@material-ui/core";
import AccountEmailForm from "../ui-components/account-email-form/index";
import AccountPasswordForm from "../ui-components/account-password-form/index";
import { useTranslation } from "react-i18next";
import { accountClicked } from "../../../redux/reducers/general-reducer/actions";
import { UseAccountForm } from "../../../custom-hooks/UseAccountForm";
import DeleteAccountModal from "./delete-account-modal/index";

interface Props {
  styles: ClassNameMap<AccountComponentClasses>;
}

const AccountComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("account");
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const { formData, setFormData, handleInputChange } = UseAccountForm({
    password: ""
  });
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(accountClicked(false));
    };
  }, []);

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const DeleteButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #e5342a 30%, #e5342a 90%)",
      borderRadius: 4,
      border: 0,
      color: "#fff",
      height: 32,
      padding: "0 40px",
      minWidth: "250px",
      width: "50%",
      margin: "1.25rem auto 1rem auto",
      boxShadow: "0 1px 2px 1px rgb(255 105 135 / 20%)"
    },
    label: {
      textTransform: "capitalize"
    }
  })(Button);

  return (
    <div className={styles.accountWrapperStyles}>
      <Card className={styles.accountHeaderCardStyles}>
        <Container className={styles.accountHeaderContainer}>
          <Typography className={styles.accountHeader} variant="h4">
            {t("authCredentialsHeader")}
          </Typography>
        </Container>
      </Card>
      <Container className={styles.formsContainer}>
        <AccountEmailForm />
        <AccountPasswordForm />
      </Container>
      <Container className={styles.deleteAccountContainer}>
        <Card className={styles.deleteButtonContainer}>
          <Container className={styles.headerWrapper}>
            <h4 className={styles.headerStyles}>{t("deleteAccount.header")}</h4>{" "}
          </Container>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="password"
                aria-describedby="my-helper-text"
                name="password"
                value={formData.password}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("deleteAccount.password")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <DeleteButton onClick={handleOpenDeleteModal} variant="contained">
            {t("deleteAccount.delete")}
          </DeleteButton>
        </Card>
        <DeleteAccountModal
          password={formData.password ?? ""}
          handleClose={handleCloseDeleteModal}
          open={deleteModalOpen}
        />
      </Container>
    </div>
  );
};

export default AccountComponent;
