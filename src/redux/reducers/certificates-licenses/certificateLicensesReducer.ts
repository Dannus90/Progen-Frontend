import { createSlice } from "@reduxjs/toolkit";

export interface CertificateLicenseState {
  certificateLicenseModified: boolean;
}

export const initialState: CertificateLicenseState = {
  certificateLicenseModified: false
};

export const certificateLicenseSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {
    notifyCertificateLicenseModified: (state) => {
      state.certificateLicenseModified = !state.certificateLicenseModified;
    }
  }
});

export default certificateLicenseSlice.reducer;
