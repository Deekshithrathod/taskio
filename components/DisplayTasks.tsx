import { Task as TaskType } from "@/lib/types";
import { Suspense } from "react";
import TaskList from "./TaskList";
import MaxWidthWrapper from "./ui/max-w-wrapper";

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
			{tasks.length !== 0 ? (
				<TaskList tasks={tasks} />
			) : (
				<MaxWidthWrapper>
					<div className="mt-4 mx-6 sm:mx-0 sm:mt-8  text-center h-40 flex items-center justify-center  bg-slate-200 rounded-xl">
						No tasks found
					</div>
				</MaxWidthWrapper>
			)}
		</Suspense>
	);
};
export default DisplayTasks;
