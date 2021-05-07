import axios from "axios";
import { getToken } from "../utils/auth-helper";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const { accessToken } = getToken();
const auth = `Bearer ${accessToken}`;

const headerOptionsAuth = (authorization: string) => {
  return {
    headers: {
      authorization,
      "content-type": "application/json"
    }
  };
};

// API CALLS
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPut = async <TPayload>(
  url: string,
  method: HttpMethods = "PUT",
  body: TPayload
) => {
  const response = await axios.put(url, body, {
    method,
    ...headerOptionsAuth(auth)
  });

  return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchDelete = async (url: string, method: HttpMethods = "DELETE") => {
  const response = await axios.delete(url, {
    method,
    ...headerOptionsAuth(auth)
  });

  return response;
};
