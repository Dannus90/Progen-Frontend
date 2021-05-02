export interface EditEducationData {
  id: string;
  educationName: string;
  examName: string;
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
  educationName: string;
  examName: string;
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
  educationName: string;
  examName: string;
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
