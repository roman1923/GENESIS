import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reposReducer from "./reposReducer";
import videoReducer from "./videoReducer";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  repos: reposReducer,
  videos: videoReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };