const TaskSkeleton = () => {
	return (
		<div className="flex gap-2 sm:gap-3 align-middle ">
			<input
				type="checkbox"
				name="checkbox"
				id={`taskio`}
				className="w-4 h-4 sm:w-5 sm:h-5 mt-1 appearance-none rounded border border-zinc-500"
			/>
			<label
				htmlFor={`taskio`}
				className="w-full bg-slate-200 rounded animate-pulse h-6"></label>
		</div>
	);
};
export default TaskSkeleton;
