import api from './api'

const postService = {
  getList(params) {
    return api.call().get("/wp/v2/posts", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
  getArticleLatest() {
    return postService.getList({
      page: 1,
      per_page: 3,
    });
  },
  getArticlePopular() {
    return postService.getList({
      page: 1,
      per_page: 3,
    });
  },
};

export default postService;
