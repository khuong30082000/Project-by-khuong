import api from "./api";

export const authService = {
  login(username, password) {
    return api.call().post("/jwt-auth/v1/token", {
      username,
      password,
    });
  },
  fetchMe(token) {
    return api.call().get("/wp/v2/users/me", {
      headers: {
        Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4MFwvd3AtYXBpIiwiaWF0IjoxNjQ5OTkyOTc3LCJuYmYiOjE2NDk5OTI5NzcsImV4cCI6MTY1MDU5Nzc3NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.p36rWocNyKLr3dAl6zaotiBpJlgkE0ybtJoAmygVoq0",
      },
    });
  },
};
