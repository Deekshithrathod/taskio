"use client";

import clsx from "clsx";
import Checkbox from "./checkbox";

const Task = ({
	id,
	text,
	completed,
}: {
	id: number;
	text: string;
	completed: boolean;
}) => {
	return (
		<div className="flex gap-2 sm:gap-3 align-middle">
			<Checkbox id={id} completed={completed} />
			<label
				htmlFor={id.toString()}
				className={clsx(
					"text-black text-md sm:text-lg font-medium whitespace-nowrap truncate hover:whitespace-normal dark:text-white",
					{
						"line-through": completed,
					}
				)}>
				{id}-{text}
			</label>
		</div>
	);
};
export default Task;
