import { ACT_LOGIN_SUCCESS } from "./action";
const initState = {
  currentUser: null,
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      break;

    default:
      return authState;
  }
}
export default reducer;
