import { TOGGE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

export const toggleVisibleProfile = () => {
  return {
    type: TOGGE_VISIBLE_PROFILE,
  };
};

export const updateProfile = (profile) => {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
};
