import { Task as TaskType } from "@/lib/types";
import TaskList from "./TaskList";
import LoadMore from "./ui/load-more";

const DisplayTasks = async ({
	limit,
	offset,
	filter,
}: {
	limit: number;
	offset: number;
	filter: string;
}) => {
	const res = await fetch(
		`http://localhost:3000/api/task?limit=${limit}&offset=${offset}`
	);
	let { tasks }: { tasks: TaskType[] } = await res.json();

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
		<>
			<TaskList tasks={tasks} />
			<LoadMore />
		</>
	);
};
export default DisplayTasks;
