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
  getArticleGeneral({ page = 1, per_page = 100 } = {}) {
    return postService.getList({
      page: 1,
      per_page: 3,
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
      orderby:'post_views'
    });
  },
};

export default postService;
