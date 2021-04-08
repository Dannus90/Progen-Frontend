interface TokenData {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getToken = (): TokenData => {
  let tokenData;
  const retrievedData = localStorage.getItem("tokenData");
  if (retrievedData) {
    tokenData = JSON.parse(retrievedData);
  }

  return tokenData;
};

export const setTokens = (tokenData: TokenData): void => {
  localStorage.setItem("tokenData", JSON.stringify(tokenData));
};
