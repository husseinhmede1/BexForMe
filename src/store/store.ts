import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer from "./rootReducer";

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createHashHistory({ hashType: "slash", basename: "/" }),
  routerReducerKey: "router",
  savePreviousLocations: 3,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["login"],
  blacklist: ["router"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  routerMiddleware,
];

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(routerReducer)
);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: true,
});

let persistor = persistStore(store);
const history = createReduxHistory(store);

export { history, store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
