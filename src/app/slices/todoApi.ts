import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "@/interfaces/";

/**
 * * Tag: tên key của dữ liệu được lưu trong cache (bộ nhớ đệm)
 * * provideTags: 1 query (call api đến 1 enpoint nào đó) có thể được lưu dữ liệu vào cache với "Tag" tương ứng
 * * invalidateTags: quyết định thay đổi dữ liệu được lưu trong cache nếu tên invalidateTags trùng với "Tag" đã tồn tại trong cache
 */

const fakeAccessToken = "sdfsdfasdfan23.sdfn23422f2f2j232.12sdf232sdfsdfdsf42";

const todoApi = createApi({
	tagTypes: ["Todo"],
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3001",
		// call api và gắn token theo header và gửi lên server để check role
		prepareHeaders: (headers) => {
			headers.set("authorization", `Bearer ${fakeAccessToken}`);
		},
	}),

	endpoints: (builder) => {
		return {
			fetchTodos: builder.query({
				query: () => "/todos", // endpoint muốn lấy dữ liệu
				providesTags: ["Todo"], // tham chiếu đến "tag" (tagTypes đã khai báo) đã lưu trong cache
			}),

			createTodo: builder.mutation({
				query: (payload: Partial<Todo>) => {
					return {
						url: "/todos", // endppint api call đến
						method: "POST", // method gửi đi
						body: payload, // dữ liệu gửi lên server
					};
				},
				invalidatesTags: ["Todo"],
			}),
			/**
			 * id của todo muốn update là Pick<Todo,"id"> -> trả về type của todo id
			 * dữ liệu muốn update là Partial<Todo> -> update 1 phần dữ liệu của todo
			 */
			updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, "id">>({
				query: (payload) => {
					return {
						url: `/todos/${payload.id}`,
						body: payload,
						method: "PATCH",
					};
				},
				invalidatesTags: ["Todo"],
			}),
			deleteTodo: builder.mutation<Todo, Pick<Todo, "id">>({
				query: (id) => {
					return {
						url: `/todos/${id}`,
						method: "DELETE",
					};
				},
				invalidatesTags: ["Todo"],
			}),
		};
	},
});
// export ra các custom hooks để call api, lưu dữ liệu & cập nhật dữ liệu vào cache
export const { useFetchTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi;
export default todoApi;
