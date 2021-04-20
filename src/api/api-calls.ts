import { fetchDelete, fetchPut } from "./httpClient";

const ensureEnvVariable = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error("Missing environment variable: " + envVar);
  }
};

ensureEnvVariable("REACT_APP_PROGEN_API_URL");

const API_V1 = "api/v1";

export const PROGEN_API_URL = `${process.env.REACT_APP_PROGEN_API_URL}/${API_V1}`;

// Image related methods.
const USER_BASE = "user/userdata";

export const uploadImage = (body: FormData) =>
  fetchPut(`${PROGEN_API_URL}/${USER_BASE}/profile-image`, "PUT", body);

export const deleteImage = (publicId: string) =>
  fetchDelete(`${PROGEN_API_URL}/${USER_BASE}/profile-image/${publicId}`, "DELETE");
