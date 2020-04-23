import * as typeTestContant from './TestContant'
export const incrementCounter = () => {
    return {
        type: typeTestContant.INCREMENT_COUNTER
    }
}
export const decrementCounter = () => {
    return {
        type: typeTestContant.DECREMENT_COUNTER
    }
}