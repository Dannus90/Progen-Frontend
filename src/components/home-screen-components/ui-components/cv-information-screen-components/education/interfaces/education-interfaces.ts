export interface EditEducationData {
  id: string;
  userId: string;
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
  id: string;
  userId: string;
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
