import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./features/todo/pages/TodoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
