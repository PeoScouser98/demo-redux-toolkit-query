import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer";
import todoApi from "./slices/todoApi";

const store = configureStore({
	reducer: rootReducer,
	// gắn thêm các middlewares trong quá trình sự dụng state của redux
	middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(todoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // kiểu dữ liệu mà state lưu trong redux
export const useAppDispatch: () => AppDispatch = useDispatch; // custom hook với kiểu dữ liệu của function dispatch để dispatch action

export default store;
