import { Container } from "@mui/material";
import React from "react";
import AddTodo from "../components/AddTodo";
import TodoTable from "../components/TodoTable";

const Todo = () => {
	return (
		<Container maxWidth="sm">
			<AddTodo />
			<TodoTable />
		</Container>
	);
};

export default Todo;
