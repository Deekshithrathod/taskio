import { Task as TaskType } from "@/lib/types";
import Task from "./ui/task";
import MaxWidthWrapper from "./ui/max-w-wrapper";

const TaskList = ({ tasks }: { tasks: TaskType[] }) => {
	return tasks.length === 0 ? (
		<MaxWidthWrapper>
			<div className="mt-4 mx-6 sm:mx-0 sm:mt-8  text-center h-40 flex items-center justify-center  bg-slate-200 rounded-xl">
				No tasks found
			</div>
		</MaxWidthWrapper>
	) : (
		<div className="mt-4 mx-6 sm:mx-0 sm:mt-8 flex flex-col gap-4">
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</div>
	);
};
export default TaskList;
