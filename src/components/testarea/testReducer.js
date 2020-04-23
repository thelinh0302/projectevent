import { createReducer } from './../../app/common/util/ReducerUtil'

import * as typeTestContant from './TestContant'
const initialState = {
    data: 49
}
export const incrementCounter = (state, payload) => {
    return { ...state, data: state.data + 1 };
}
export const decrementCounter = (state, payload) => {
    return { ...state, data: state.data - 1 };
}
// const testReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case typeTestContant.INCREMENT_COUNTER:
//             return { ...state, data: state.data + 1 };
//         case typeTestContant.DECREMENT_COUNTER:
//             return { ...state, data: state.data - 1 };
//         default: return state
//     }
// }
export default createReducer(initialState, {
    [typeTestContant.INCREMENT_COUNTER]: incrementCounter,
    [typeTestContant.DECREMENT_COUNTER]: decrementCounter
})