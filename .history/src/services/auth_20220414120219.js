import api from "./api"


const authService = { 
    login(username,password) {
        return api.call().post('/jwt-auth/v1/token')

    }
    
}