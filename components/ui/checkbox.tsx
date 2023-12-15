"use client";

import { updateTask } from "@/lib/actions";
import { useState } from "react";

const Checkbox = ({ id, completed }: { id: number; completed: boolean }) => {
	const [checked, setChecked] = useState(completed);
	const update = updateTask.bind(null, id);
	return (
		<>
			<input
				type="checkbox"
				name="checkbox"
				id={id.toString()}
				checked={checked}
				onChange={(e) => {
					setChecked((prevState) => !prevState);
					update(!checked);
				}}
				className="w-4 h-4 sm:w-5 sm:h-5 mt-1 relative peer appearance-none rounded border border-zinc-500 checked:bg-blue-500 checked:border-0 shrink-0"
			/>
			<svg
				onClick={() => {
					setChecked((prevState) => !prevState);
					update(!checked);
				}}
				className="absolute w-4 h-4 sm:w-5 sm:h-5 mt-1 hidden peer-checked:block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#FFF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round">
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
		</>
	);
};
export default Checkbox;
