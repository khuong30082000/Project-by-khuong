import categoryService from "../../services/category"

//Action Type 
export const ACT_FETCH_ALL_CATEGORIES ='ACT_FETCH_ALL_CATEGORIES'

//Action
export function actFetchAllCategories() {

}

//Action Async
export function actFetchAllCategoriesAync() {
    return  async dispatch => {
        try {
            const response =  await categoryService.getList();
            console.log(response);
        } catch (error) {
            
        }
    }
    
}