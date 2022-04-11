import { api } from "./api";

const postService = {
  getList() {
    return api.call().get("/wp/v2/posts");
  },
};
