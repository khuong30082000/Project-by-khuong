//Action type 

import { authService } from "../../services/auth"


//Action 


//Action Async

export function loginAsync(username,password) {
    return  async dispatch => {
        try {
            const response = await authService.login(username,password)
        } catch (error) {
            
        }
    }
}