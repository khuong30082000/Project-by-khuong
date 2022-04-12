import {
  ACT_FETCH_ARTICLE_GENERAL,
  ACT_FETCH_ARTICLE_LATEST,
  ACT_FETCH_ARTICLE_POPULAR,
} from "./action";

const initState = {
  articleLatest: [],
  articlePopular: [],
  articlePaging: {
    lists: [],
    currentPage: null,
    totalPages:null
  },
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.posts,
      };
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.posts,
      };
    case ACT_FETCH_ARTICLE_GENERAL:
      return {
        ...postState,
        articlePaging: {
          ...postState.articlePaging,
          lists:
            action.payload.currentPage === 1
              ? action.payload.posts
              : [...postState.articlePaging.lists, ...action.payload.posts],
          currentPage: action.payload.currentPage,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };

    default:
      return postState;
  }
}
export default reducer;
