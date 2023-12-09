import { Task as TaskType } from "@/lib/types";
import { Suspense } from "react";
import TaskList from "./TaskList";

const DisplayTasks = async ({
	limit,
	offset,
	filter,
}: {
	limit: number;
	offset: number;
	filter: string;
}) => {
	let { tasks }: { tasks: TaskType[] } = await fetch(
		`http://localhost:3000/api/task?limit=${limit}&offset=${offset}`
	).then((res) => res.json());
	if (filter !== "All") {
		const filteredTasks = tasks.filter((task) => {
			if (filter === "Completed") {
				return task.completed;
			} else if (filter === "Active") {
				return !task.completed;
			}
		});
		tasks = filteredTasks;
	}
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<TaskList tasks={tasks} />
		</Suspense>
	);
};
export default DisplayTasks;
