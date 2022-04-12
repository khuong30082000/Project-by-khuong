import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

//Action type
export const ACT_FETCH_ARTICLE_LATEST = "ACT_FETCH_ARTICLE_LATEST";
export const ACT_FETCH_ARTICLE_POPULAR = "ACT_FETCH_ARTICLE_POPULAR";
export const ACT_FETCH_ARTICLE_GENERAL = "ACT_FETCH_ARTICLE_GENERAL";

//Action

export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts,
    },
  };
}

export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts,
    },
  };
}
export function actFetchArticleGeneral({currentPage,posts}) {
  return {
    type: ACT_FETCH_ARTICLE_GENERAL,
    payload: {
      currentPage,
      posts,
    },
  };
}

//Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts));
    } catch (error) {}
  };
}

export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticlePopular(posts));
    } catch (error) {}
  };
}
export function actFetchArticleGeneralAsync({ currentPage = 1, perPage = 2 }= {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral({
        currentPage,
        perPage
      });
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleGeneral(posts))
    } catch (error) {}
  };
}
