import { ACT_LOGIN_SUCCESS } from "./action";
const initState = {
  currentUser: null,
  token:''
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
        localStorage.setItem('access_token',action.payload.token)
      return {
          currentUser:action.payload.user,
          token:action.payload.token
      }

    default:
      return authState;
  }
}
export default reducer;
