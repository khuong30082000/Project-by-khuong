import api from './api'

const categoryService = {
  getCategory(params) {
    return api.call().get("/wp/v2/posts", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
 
};

export default categoryService;
