import postService from "../../services/post";

//Action type
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST';

//Action

export function actFetchArticleLatest () {

}

//Action Async
export function actFetchArticleLatestAsync () {
    return async dispatch => {
        try {
            const posts = await postService.getArticleLatest()
        } catch (error) {
            
        }
    }
    
}