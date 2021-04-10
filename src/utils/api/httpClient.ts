import axios from "axios";
import { getToken } from "../auth-helper";

type PostData = Record<string, string | null>;
type ConfigData = Record<string, Record<string, string>>;

const retrieveToken = (): string | null => {
  const { accessToken } = getToken();

  return accessToken;
};

const compileConfig = (config: ConfigData) => ({
  ...config,
  headers: {
    ...(config && config.headers ? config.headers : {}),
    Authorization: `Bearer ${retrieveToken()}`
  }
});

const post = (path: string, data: PostData, config = {}) =>
  axios.post(path, data, compileConfig(config));

export default {
  post
};
