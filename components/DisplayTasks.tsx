import TaskList from "./TaskList";
import LoadMore from "./ui/load-more";
import { getTasks } from "@/lib/actions";

const DisplayTasks = async ({ filter }: { filter: string }) => {
	let tasks = await getTasks(0, 50);

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
