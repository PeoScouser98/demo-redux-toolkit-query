import { combineReducers } from "@reduxjs/toolkit";
import todoApi from "./slices/todoApi";

const rootReducer = combineReducers({
	todoApi: todoApi.reducer, // thêm todo reducer vào root reducer
	// ... tương tự khi có thêm các reducer khác
});

export default rootReducer;
