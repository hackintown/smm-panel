import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import persistedReducer from './authSlice';

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };