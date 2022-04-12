import categoryService from "../../services/category"

//Action Type 
export const ACT_FETCH_ALL_CATEGORIES ='ACT_FETCH_ALL_CATEGORIES'

//Action
function actFetchAllCategories() {

}

//Action Async
function actFetchAllCategoriesAync() {
    return  async dispatch => {
        try {
            const response =  await categoryService.getList()
        } catch (error) {
            
        }
    }
    
}