import { ACT_FETCH_ARTICLE_LATEST } from "./action";

const initState = {
  postList: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST
      break;

    default:
      return postState;
  }
}
export default reducer;
