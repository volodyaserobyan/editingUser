import { combineReducers } from 'redux';
import { groupIdReducer } from './groupIdReducer'
import { userIdReducer } from './userIdReducer'
import { getItemsReducer } from './getItemsReducer';

const rootReducer = combineReducers({
    groupIdReducer,
    userIdReducer,
    getItemsReducer
})

export default rootReducer;