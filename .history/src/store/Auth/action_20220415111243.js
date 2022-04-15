//Action type

import { authService } from "../../services/auth";

//Action

//Action Async
export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(token)
      return{
        ok:true
      }
    } catch (error) {
      return {
        ok:false,
        error:"User name hoac password khong hop le"
      }
    }
  }
}

export function loginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token
     
      const responseMe = await dispatch(actFetchMeAsync(token))
   
      return {
        ok: responseMe.ok,
        error:responseMe.error
      };
    } catch (error) {
      return {
        ok: false,
        error: "User name hoac password khong hop le ",
      };
    }
  };
}
