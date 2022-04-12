import { ACT_FETCH_ALL_CATEGORIES } from "./Action"

const initState ={
      hashCategoryById:{}
    
}

function reducer(categoryState =initState,action) {
      switch (action.type) {
            case ACT_FETCH_ALL_CATEGORIES:
                return {
                      ...categoryState
                }
                  
                
      
            default:
                  return categoryState
      }
}
export default reducer