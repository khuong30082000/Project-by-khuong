import api from "./api";

const categoryService = {
  getCategory({ page = 1, per_page = 100 } = {}) {
    return api.call().get("/wp/v2/categories", {
      params: {
        page,
        lang: "vi",
      },
    });
  },
};

export default categoryService;
