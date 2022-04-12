import categoryService from "../../services/category";

//Action Type
export const ACT_FETCH_ALL_CATEGORIES = "ACT_FETCH_ALL_CATEGORIES";

//Action
export function actFetchAllCategories(categories) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      categories,
    },
  };
}

//Action Async
export function actFetchAllCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoryService.getList();
      const categories = response.data;
     dispatch(actFetchAllCategories(categories))
    } catch (error) {}
  };
}
