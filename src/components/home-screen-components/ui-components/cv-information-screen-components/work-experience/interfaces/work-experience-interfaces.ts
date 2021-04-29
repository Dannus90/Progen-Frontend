export interface WorkExperienceInput {
  employmentRate: string | null;
  companyName: string | null;
  roleSv: string | null;
  roleEn: string | null;
  descriptionSv: string | null;
  descriptionEn: string | null;
  citySv: string | null;
  cityEn: string | null;
  countrySv: string | null;
  countryEn: string | null;
  dateStarted: Date | null;
  dateEnded: Date | null;
}

export interface WorkExperience extends WorkExperienceInput {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  statusCode: number;
}
