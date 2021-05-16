import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type acceptedTypes = string | null | undefined;

export interface UserDataState {
  firstName: acceptedTypes;
  lastName: acceptedTypes;
  email: acceptedTypes;
  phoneNumber: acceptedTypes;
  countrySv: acceptedTypes;
  citySv: acceptedTypes;
  countryEn: acceptedTypes;
  cityEn: acceptedTypes;
  zipCode: acceptedTypes;
  profileImage: acceptedTypes;
  publicId: acceptedTypes;
  workTitleSv: acceptedTypes;
  workTitleEn: acceptedTypes;
  beenLoaded?: boolean;
}

interface UserNameData {
  firstName: acceptedTypes;
  lastName: acceptedTypes;
}

export const initialState: UserDataState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  countrySv: "",
  citySv: "",
  countryEn: "",
  cityEn: "",
  zipCode: "",
  profileImage: "",
  publicId: "",
  workTitleSv: "",
  workTitleEn: "",
  beenLoaded: false
};

interface ImageState {
  profileImagePublicId: string | null;
  profileImage: string | null;
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<UserNameData>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setUserData: (state, action: PayloadAction<UserDataState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.countrySv = action.payload.countrySv;
      state.citySv = action.payload.citySv;
      state.countryEn = action.payload.countryEn;
      state.cityEn = action.payload.cityEn;
      state.zipCode = action.payload.zipCode;
      state.workTitleSv = action.payload.workTitleSv;
      state.workTitleEn = action.payload.workTitleEn;
      state.profileImage = action.payload.profileImage;
      state.publicId = action.payload.publicId;
    },
    setProfileImageData: (state, action: PayloadAction<ImageState>) => {
      state.profileImage = action.payload.profileImage;
      state.publicId = action.payload.profileImagePublicId;
    },
    setHasLoaded: (state) => {
      state.beenLoaded = !state.beenLoaded;
    }
  }
});

export default userDataSlice.reducer;
