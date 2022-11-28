import { createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import RootReducer from 'store/reducers/RootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const middlewareEnhancer = applyMiddleware(thunk);
const enhancerList = [];
if(window.__REDUX_DEVTOOLS_EXTENSION__) enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = compose(middlewareEnhancer, ...enhancerList);

// const persistConfig = {
//     key: 'root',
//     storage,
//     version: 1,
//     stateReconciler: hardSet,
// };

// const persistedRootReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(RootReducer, composeEnhancers);
// export const persistor = persistStore(store);