export interface CertificateLicenseInput {
  id?: string;
  userId?: string;
  certificateNameSv: string;
  certificateNameEn: string;
  organisation: string;
  identificationId: string;
  referenceAddress: string;
  dateIssued: Date | string;
}

export interface GetCertificatesResponse {
  certificate: {
    getCertificates: {
      statusCode: number;
      certificate: Array<GetCertificateResponse>;
    };
  };
}

export interface DeleteCertificateResponse {
  certificate: {
    deleteCertificate: {
      statusCode: number;
      message: string;
    };
  };
}

export interface DeleteCertificateInput {
  certificateId: string;
}

export interface GetCertificateResponse {
  id: string;
  userId: string;
  certificateNameSv: string;
  certificateNameEn: string;
  organisation: string;
  identificationId: string;
  referenceAddress: string;
  dateIssued: Date | string;
  updatedAt: Date | string;
  createdAt: Date | null | string;
}

export interface EditCertificateLicenseData {
  id: string;
  userId: string;
  certificateNameSv: string;
  certificateNameEn: string;
  organisation: string;
  identificationId: string;
  referenceAddress: string;
  dateIssued: Date | string;
  updatedAt: Date | string;
  createdAt: Date | null | string;
}

export interface CreateCertificateInput {
  certificateNameSv: string;
  certificateNameEn: string;
  organisation: string;
  identificationId: string;
  referenceAddress: string;
  dateIssued: string;
}

export interface CreateCertificateResponse {
  certificateId: string;
  statusCode: number;
}

export interface UpdateCertificateInput {
  dateIssue: Date | string;
  referenceAddress: string;
  identificationId: string;
  organisation: string;
  certificateNameEn: string;
  certificateNameSv: string;
  certificateId: string;
}

export interface UpdateCertificateResponse {
  statusCode: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  dateIssued: Date | string;
  referenceAddress: string;
  identificationId: string;
  organisation: string;
  certificateNameEn: string;
  certificateNameSv: string;
  userId: string;
  id: string;
}
