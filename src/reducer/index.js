import { combineReducers } from 'redux';
import WordReducer from './WordReducer';

const rootReducer = combineReducers({
    wordList: WordReducer
})

export default rootReducer;