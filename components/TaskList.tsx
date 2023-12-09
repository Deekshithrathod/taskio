import { Task as TaskType } from "@/lib/types";
import Task from "./ui/task";

const TaskList = ({ tasks }: { tasks: TaskType[] }) => {
	return (
		<div className="mt-4 mx-6 sm:mx-0 sm:mt-8 flex flex-col gap-4">
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</div>
	);
};
export default TaskList;
