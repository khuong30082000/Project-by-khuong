import categoryService from "../../services/category"

//Action Type 
export const ACT_FETCH_ALL_CATEGORIES ='ACT_FETCH_ALL_CATEGORIES'

//Action
function actFetchAllCategories() {

}

//Action Async
function actFetchAllCategoriesAync() {
    return dispatch => {
        try {
            const response = categoryService.getList()
        } catch (error) {
            
        }
    }
    
}