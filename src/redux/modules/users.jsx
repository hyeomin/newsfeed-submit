import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { CLEAR_USER, SET_USER } from "./actionTypes";

const initialState = [
  {
    email: "noData",
    id: "noData",
    isdone: false,
    nickname: "noData",
  },
];

// actionTypes.js
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// actions.js

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

// actions.js

export const registerUser = (email, password, nickname) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, {
      displayName: nickname,
    });
    // Dispatch an action to set the user in state
    dispatch({
      type: SET_USER,
      payload: userCredential.user,
    });
  } catch (error) {
    console.error(error);
    // Handle errors, possibly dispatch another action
  }
};
