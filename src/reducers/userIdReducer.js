export const userIdReducer = (state = {}, action) => {

    switch(action.type){
        case 'GET_USERID':
            return {
                ...state,
                userId: action.userId
            }
            default: return state;
    }
}