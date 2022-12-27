import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Checkbox } from "@mui/material";

import todoApi, { useDeleteTodoMutation, useUpdateTodoMutation } from "@/app/slices/todoApi";
import { Todo } from "@/interfaces";

const TodoTable = () => {
	const { data } = todoApi.useFetchTodosQuery(undefined);

	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableCell style={{ fontWeight: "600" }}>Completed</TableCell>
					<TableCell style={{ fontWeight: "600" }}>Todo</TableCell>
					<TableCell style={{ fontWeight: "600" }} align="center">
						Action
					</TableCell>
				</TableHead>
				<TableBody>
					{Array.isArray(data) ? (
						data.map((item) => (
							<TableRow key={item.id}>
								<TableCell>
									<Checkbox
										checked={item.completed}
										onChange={() => {
											updateTodo({ ...item, completed: !item.completed });
										}}
									/>
								</TableCell>
								<TableCell>{item.todo}</TableCell>
								<TableCell>
									<Button
										color="error"
										onClick={() => {
											console.log(item);
											deleteTodo(item);
										}}
									>
										<DeleteForeverIcon />
									</Button>
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={2}>Loading...</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TodoTable;
