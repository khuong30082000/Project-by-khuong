//Action type

import { authService } from "../../services/auth";

//Action

//Action Async
export function actFetchMe(token) {
  return async (dispatch) => {

  }
}

export function loginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token
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
