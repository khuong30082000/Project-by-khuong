import api from './api'

const categoryService = {
  getCategory(params) {
    return api.call().get("/wp/v2/categories", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
 
};

export default categoryService;
