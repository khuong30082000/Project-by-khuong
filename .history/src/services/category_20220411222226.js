import api from './api'

const postService = {
  getCategory(params) {
    return api.call().get("/wp/v2/posts", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
 
};

export default postService;
