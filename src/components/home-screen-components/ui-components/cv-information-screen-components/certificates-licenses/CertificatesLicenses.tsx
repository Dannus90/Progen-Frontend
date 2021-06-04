import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CertificateLicenseComponentClasses } from "./index";
import { Button, CircularProgress, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { Alert } from "@material-ui/lab";
import CachedIcon from "@material-ui/icons/Cached";
import { GET_CERTIFICATES_LICENSES } from "./gql";
import { GetCertificatesResponse } from "./interfaces/certificate-licenses-interfaces";
import CertificateLicenseDisplay from "./certificate-license-display/index";
import CertificateLicenseModal from "./certificate-license-modal/index";

interface Props {
  styles: ClassNameMap<CertificateLicenseComponentClasses>;
}

const CertificateLicenseComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const { certificateLicenseState } = useAppSelector((state) => state);
  const { refetch, error, loading, data } =
    useQuery<GetCertificatesResponse>(GET_CERTIFICATES_LICENSES);

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  const refetchCertificatesLicenses = async () => {
    try {
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refetchCertificatesLicenses();
  }, [certificateLicenseState.certificateLicenseModified]);

  let sortedCertificates = data?.certificate.getCertificates.certificate;

  if (sortedCertificates) {
    sortedCertificates = [...sortedCertificates].sort((a, b) => {
      if (a.dateIssued && b.dateIssued) {
        if (a.dateIssued < b.dateIssued) return -1;
        if (a.dateIssued > b.dateIssued) return 1;

        return 0;
      }

      return 0;
    });
  }

  return (
    <div className={styles.certificateLicenseWrapperStyles}>
      <Container className={styles.createCertificateLicenseButtonContainer}>
        <Button
          size="small"
          color="primary"
          className={styles.createCertificateLicenseButton}
          type="submit"
          onClick={() => setCreateOpen(true)}
          variant="contained">
          {t("certificate.createNew")}
        </Button>
        <CertificateLicenseModal
          isCreate={true}
          handleClose={handleCreateModalClose}
          open={createOpen}
          header={t("certificate.modal.createNew")}
        />
      </Container>
      {error && (
        <Alert
          className={`${styles.alertStyle}`}
          icon={<CachedIcon onClick={() => refetch()} className={styles.refetchIcon} />}
          severity="error">
          {error?.graphQLErrors.map(
            (err) => `${err.message}`
          )}
        </Alert>
      )}
      {loading && (
        <Container className={styles.loaderContainer}>
          <CircularProgress size={50} />
        </Container>
      )}
      {!loading && !error && data && (
        <Container>
          {!!sortedCertificates &&
            sortedCertificates.map((sc) => {
              return <CertificateLicenseDisplay key={sc.id} certificateLicenseData={sc} />;
            })}
        </Container>
      )}
    </div>
  );
};

export default CertificateLicenseComponent;
