import { userDataSlice, initialState } from "./../userDataReducer";
import { rootReducer } from "../../rootReducer";

import { setHasLoaded, setName, setProfileImageData, setUserData } from "../actions";
import { selectUserData } from "../selectors";

describe("UserData Redux", () => {
  describe("User data redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.userDataState).toBeDefined();
      expect(userDataSlice.name).toBe("userData");
    });
  });

  describe("Set profile image action is working", () => {
    it("Correctly updates the state", () => {
      const state = rootReducer.userDataState(
        initialState,
        setProfileImageData({ profileImagePublicId: "testId", profileImage: "testUrl" })
      );

      expect(state.profileImage).toBe("testUrl");
      expect(state.publicId).toBe("testId");
    });
  });

  describe("Sets userData correctly", () => {
    it("Correctly updates the state", () => {
      const stateForUpdate = {
        firstName: "Testname",
        lastName: "Testname2",
        email: "persson.daniel.1990@gmail.com",
        phoneNumber: "073-3249826",
        countrySv: "Sverige",
        citySv: "Göteborg",
        countryEn: "Sweden",
        cityEn: "Gothenburg",
        profileImage: "testImage",
        publicId: "wrtwert23452345345"
      };
      const state = rootReducer.userDataState(initialState, setUserData(stateForUpdate));
     
      expect(JSON.stringify(stateForUpdate)).toEqual(
        JSON.stringify({
          firstName:  state.firstName,
          lastName: state.lastName,
          email: state.email,
          phoneNumber: state.phoneNumber,
          countrySv: state.countrySv,
          citySv: state.citySv,
          countryEn: state.countryEn,
          cityEn: state.cityEn,
          profileImage: state.profileImage,
          publicId: state.publicId
        })
      );
    });
  });

  describe("Sets name correctly", () => {
    it("Correctly updates the name", () => {
      const nameData = {
        firstName: "Testname",
        lastName: "Testname2"
      };
      const state = rootReducer.userDataState(initialState, setName(nameData));
     
      expect(state.firstName).toEqual("Testname");
      expect(state.lastName).toEqual("Testname2");
    });
  });

  describe("Sets loading correctly", () => {
    it("Correctly updates the loading state", () => {
      const state = rootReducer.userDataState(initialState, setHasLoaded());
     
      expect(state.beenLoaded).toEqual(true);

      const updatedState = rootReducer.userDataState(state, setHasLoaded());

      expect(updatedState.beenLoaded).toEqual(false);

    });
  });
});
