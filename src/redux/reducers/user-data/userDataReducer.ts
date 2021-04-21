import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
  profileImage: acceptedTypes;
  publicId: acceptedTypes;
  beenLoaded?: boolean;
}

interface UserNameData {
  firstName: acceptedTypes;
  lastName: acceptedTypes;
}

const initialState: UserDataState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  countrySv: "",
  citySv: "",
  countryEn: "",
  cityEn: "",
  profileImage: "",
  publicId: "",
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

export const { setName, setUserData, setHasLoaded, setProfileImageData } = userDataSlice.actions;
export const selectFullName = (state: RootState): string =>
  `${state.userDataState.firstName} ${state.userDataState.lastName}`;

export const selectUserData = (state: RootState): UserDataState => state.userDataState;

export default userDataSlice.reducer;
