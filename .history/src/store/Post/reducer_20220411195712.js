import { ACT_FETCH_ARTICLE_LATEST } from "./action";

const initState = {
  articleLatest: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,

      };

    default:
      return postState;
  }
}
export default reducer;
