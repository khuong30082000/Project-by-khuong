//Action type

import { authService } from "../../services/auth";

//Action

//Action Async
export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(token)
      console.log(response)
    } catch (error) {
      console.log('err',error)
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
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: "User name hoac password khong hop le ",
      };
    }
  };
}
