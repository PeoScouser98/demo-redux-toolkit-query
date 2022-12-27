import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Todo } from "@/interfaces";
import { useCreateTodoMutation } from "@/app/slices/todoApi";

type Props = {};

const AddTodo = (props: Props) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [createTodo] = useCreateTodoMutation();

	const handleAddNewTodo = (data: Partial<Todo>) => {
		console.log(data);
		createTodo({
			...data,
			completed: false,
		});
	};
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "100%" },
			}}
			noValidate={false}
			autoComplete="off"
			onSubmit={handleSubmit(handleAddNewTodo)}
		>
			<TextField
				id="filled-error-helper-text"
				label="Todo"
				defaultValue="Write something ..."
				variant="filled"
				fullWidth={true}
				{...register("todo", { required: true })}
			/>
		</Box>
	);
};

export default AddTodo;
