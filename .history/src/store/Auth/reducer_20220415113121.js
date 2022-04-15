import { ACT_LOGIN_SUCCESS } from "./action";
const initState = {
  currentUser: null,
  token:''
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      return {
          currentUser:action.payload.user
          token:action.payload.token
      }

    default:
      return authState;
  }
}
export default reducer;
