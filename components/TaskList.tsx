import Task from "./ui/task";
import MaxWidthWrapper from "./ui/max-w-wrapper";
import { TaskProp } from "@/lib/types";

const TaskList = ({ tasks }: { tasks: TaskProp[] }) => {
	return (
		<div className="mt-4 mx-6 sm:mx-0 sm:mt-8 flex flex-col gap-4">
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</div>
	);
};
export default TaskList;
