import { combineReducers } from 'redux';
import NovelsReducer from './NovelsReducer';

const rootReducer = combineReducers({
    'novels': NovelsReducer
});

export default rootReducer;