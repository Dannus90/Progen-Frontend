export interface WorkExperienceInput {
  employmentRate: string;
  companyName: string;
  roleSv: string;
  roleEn: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
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

export interface WorkExperienceResponse {
  workExperienceId: string;
  statusCode: number;
}

export interface GetWorkExperiencesResponse {
  workExperience: {
    getWorkExperiences: {
      statusCode: number;
      workExperiences: Array<GetWorkExperienceResponse>;
    };
  };
}

export interface GetWorkExperienceResponse {
  id: string;
  userId: string;
  employmentRate: string;
  companyName: string;
  roleSv: string;
  roleEn: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  dateStarted: Date | null;
  dateEnded: Date | null;
}
