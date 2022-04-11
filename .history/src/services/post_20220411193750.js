import { api } from "./api";

const postService = {
  getList(params) {
    return api.call().get("/wp/v2/posts",{
        params: {
            per_page:3,
            page:1
        }
    });
  },
};
