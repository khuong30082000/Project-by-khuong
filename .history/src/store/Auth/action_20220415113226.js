import { authService } from "../../services/auth";
//Action type
export const ACT_LOGIN_SUCCESS ='ACT_LOGIN_SUCCESS'


//Action
export function actLoginSuccess({user,token}) {
   return {
     type:ACT_LOGIN_SUCCESS,
     payload :{
          user,
          token
     }

   }
}
//Action Async
export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(token)
      const user = response.data
      await dispatch(actLoginSuccess({user,token}))
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
