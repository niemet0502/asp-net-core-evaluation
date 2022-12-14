import axios from "axios";
import {
  getStoredAuthToken,
  removeStoredAuthToken,
  removeUser,
  storeAuthToken,
  storeUser,
} from "../../utils/currentUser";
import { history } from "../../utils/history";
export const USERS_LOGIN_LOADING = "USERS LOGIN LOADING";
export const USERS_LOGIN_REQUEST = "LOGIN REQUEST";
export const USERS_LOGOUT_REQUEST = "USERS LOGOUT REQUEST";
export const USERS_LOGIN_FAILURES = "USERS LOGIN FAILURES";
export const UPDATE_CURRENT_USER = "UPDATE CURRENT USER";

export const loginUser = () => ({ type: USERS_LOGIN_LOADING });
export const loginUserSuccess = (user) => ({
  type: USERS_LOGIN_REQUEST,
  payload: user,
});
export const logoutUser = () => ({ type: USERS_LOGOUT_REQUEST });
export const loginUserfailure = () => ({ type: USERS_LOGIN_FAILURES });
export const fetchSettingsSuccess = (user) => ({
  type: UPDATE_CURRENT_USER,
  payload: user,
});

export function login(user) {
  console.log("tets");
  return async (dispatch) => {
    try {
      axios
        .post("http://localhost:5000/api/Auth/login", {
          email: user.email,
          password: user.password,
        })
        .then((result) => {
          // save user's informations in localStorage
          console.log(result);
          storeAuthToken(result.data.token);
          storeUser(JSON.stringify(result.data.user));

          dispatch(loginUserSuccess(result.data));
          history.push("/employe");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          dispatch(loginUserfailure());
        });
    } catch (error) {
      console.log("erreir");
    }
  };
}

export function logout() {
  return async (dispatch) => {
    console.log(getStoredAuthToken());
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/logout`, {
        headers: {
          Authorization: getStoredAuthToken()
            ? `Bearer ${getStoredAuthToken()}`
            : undefined,
        },
      });

      // remove token and profil in localStorage
      removeStoredAuthToken();
      removeUser();

      dispatch(logoutUser());
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
}
