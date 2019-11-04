export const groupIdReducer = (state = {}, action) => {

    switch(action.type){
        case 'GET_GROUPID':
            return {
                ...state,
                groupId: action.groupId
            }
            default: return state;
    }
}