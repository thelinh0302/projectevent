import { combineReducers } from 'redux'
import testReducer from './../../components/testarea/testReducer'
import eventReducer from './eventReducer'
const rootReducer = combineReducers({
    testReducer,
    eventReducer
})
export default rootReducer