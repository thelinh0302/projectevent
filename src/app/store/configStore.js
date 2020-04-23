import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './../reducers/rootReducer'
export const configureStore = (preloadState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhancers = [middlewareEnhancer];
    const composeEnhancers = composeWithDevTools(...storeEnhancers)
    const store = createStore(
        rootReducer,
        composeEnhancers,
        preloadState
    )
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default
                store.replaceReducer(newRootReducer)
            })
        }
    }
    return store
}