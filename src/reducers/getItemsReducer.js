export const getItemsReducer = (state = {}, action) => {

    switch(action.type){
        case 'GET_ITEMS':
            return {
                ...state,
                itemContext: action.itemContext
            }
        case 'DELETE_ITEMS':
            return {
                ...state,
                itemContext: action.itemContext
            }
            default: return state;
    }
}