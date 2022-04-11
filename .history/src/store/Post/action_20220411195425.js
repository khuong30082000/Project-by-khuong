import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

//Action type
export const ACT_FETCH_ARTICLE_LATEST = "ACT_FETCH_ARTICLE_LATEST";

//Action

export function actFetchArticleLatest(posts) {
    return {
        type: ACT_FETCH_ARTICLE_LATEST,
        payload : {
            posts
        }
    }
}

//Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts))
    } catch (error) {}
  };
}
