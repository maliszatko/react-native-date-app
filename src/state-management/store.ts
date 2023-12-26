import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loadingReducer } from "./reducers";

const store = configureStore({
    reducer: {
        user: userReducer,
        isLoading: loadingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {user: UserState, isLoading: LoadingState}
export type AppDispatch = typeof store.dispatch

export default store;
