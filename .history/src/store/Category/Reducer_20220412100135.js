import { ACT_FETCH_ALL_CATEGORIES } from "./Action"

const initState ={

    
}

function reducer(categoryState =initState,action) {
      switch (action.type) {
            case ACT_FETCH_ALL_CATEGORIES:
                  
                
      
            default:
                  return categoryState
      }
}
export default reducer