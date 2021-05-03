export interface EditEducationData {
  id: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  grade: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  dateStarted: string | null;
  dateEnded: string | null;
}

export interface EducationInput {
  educationId?: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  grade: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  dateStarted: string | null;
  dateEnded: string | null;
}

export interface EducationResponse {
  workExperienceId: string;
  statusCode: number;
}

export interface DeleteEducationInput {
  educationId: string;
}

export interface EditEducationInput {
  educationId: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  grade: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  dateStarted: string | null;
  dateEnded: string | null;
}

export interface GetEducationResponse {
  id: string;
  userId: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  grade: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  dateStarted: string | null;
  dateEnded: string | null;
}

export interface GetEducationsResponse {
  education: {
    getEducations: {
      statusCode: number;
      educations: Array<GetEducationResponse>;
    };
  };
}
