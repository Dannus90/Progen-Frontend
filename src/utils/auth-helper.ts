interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getToken = (): Tokens | null => {
  let tokenData;
  const retrievedData = localStorage.getItem("tokenData");
  if (retrievedData) {
    tokenData = JSON.parse(retrievedData);
  }

  return tokenData;
};

export const setTokens = (tokenData: Tokens): void => {
  localStorage.setItem("tokenData", JSON.stringify(tokenData));
};
