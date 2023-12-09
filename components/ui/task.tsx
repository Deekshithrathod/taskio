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
		<div className="flex gap-2 sm:gap-3">
			<Checkbox id={id} completed={completed} handleChange={() => {}} />
			<label
				htmlFor={`id-${id}`}
				className={clsx(
					"text-black text-md sm:text-lg font-medium whitespace-nowrap truncate hover:whitespace-normal",
					{
						"line-through": completed,
					}
				)}>
				{text}
			</label>
		</div>
	);
};
export default Task;
