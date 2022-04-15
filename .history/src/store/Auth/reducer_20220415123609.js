import { ACCESS_TOKEN } from "../../constants";
import { ACT_LOGIN_SUCCESS, ACT_LOGOUT_SUCCESS } from "./action";
const initState = {
  currentUser: null,
  token: "",
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case ACT_LOGOUT_SUCCESS:
      return {
        currentUser: null,
        token: "",
      };

    default:
      return authState;
  }
}
export default reducer;
