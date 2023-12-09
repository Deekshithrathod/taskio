"use client";

import { submitTask } from "@/lib/actions";
import { useState } from "react";

const AddTask = () => {
	const [todo, setTodo] = useState("");

	return (
		<form
			className="flex justify-between gap-5 mt-5 mx-6 sm:mx-0"
			action={(formData: FormData) => {
				setTodo("");
				submitTask(formData);
			}}>
			<div className="w-[90%]">
				<input
					type="text"
					name="text"
					placeholder="add a task..."
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
					autoComplete="off"
					className="px-2 py-3 sm:py-5 sm:px-3 rounded-xl border border-stone-300 w-full text-zinc-500 text-sm font-normal focus:outline-1 focus:outline-blue-500"
				/>
			</div>
			<button
				type="submit"
				className="py-3 sm:py-5 px-5 text-white text-sm font-semibold bg-blue-500 rounded-xl shadow text-center">
				Add
			</button>
		</form>
	);
};
export default AddTask;
