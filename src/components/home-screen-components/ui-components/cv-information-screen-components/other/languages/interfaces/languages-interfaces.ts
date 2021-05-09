export interface LanguageData {
  id: string;
  userId: string;
  languageSv: string;
  languageEn: string;
}

export interface LanguageInput {
  id?: string;
  languageSv: string;
  languageEn: string;
}

export interface DeleteLanguageInput {
  languageId: string;
}

export interface LanguageResponse {
  languageId: string;
  statusCode: number;
}
