import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { userReducers } from "./slices/userSlice";

const persistConfig = { key: "root", storage }; // example
const persistUser = { key: "user", storage }

const rootReducer = combineReducers({
  // counter: persistReducer(persistConfig, counterSlice), // example
  // orders: orderReducers,
  user: persistReducer(persistUser, userReducers),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
