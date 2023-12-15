"use client";

import { useInView } from "react-intersection-observer";
import MaxWidthWrapper from "./max-w-wrapper";
import { useEffect, useState } from "react";
import { getTasks } from "@/lib/actions";
import TaskList from "../TaskList";
import { TaskProp } from "@/lib/types";
import { useSearchParams } from "next/navigation";

const LoadMore = () => {
	const searchParams = useSearchParams();
	const [tasks, setTasks] = useState<TaskProp[]>([]);
	const [nomore, setNomore] = useState(false);
	const [offset, setOffset] = useState(50);

	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView && !nomore) {
			(async () => {
				try {
					console.log("offset", offset);

					const tasks = await getTasks(offset, 50);
					setOffset((prevState) => prevState + 50);
					setTasks((prevState) => [...prevState, ...tasks]);
				} catch (err) {
					console.log(err);
					setNomore(true);
				}
			})();
		}
	}, [inView]);

	return (
		<MaxWidthWrapper>
			<TaskList
				tasks={tasks.filter(filterFn(searchParams.get("filter") || "All"))}
			/>
			<div
				ref={ref}
				className="mt-6 mb-8 mx-auto sm:mt-8 px-6 py-2 text-center bg-slate-200 rounded w-fit">
				No tasks found
			</div>
		</MaxWidthWrapper>
	);
};

const filterFn = (filter: string) => {
	return (task: TaskProp) => {
		if (filter === "Completed") {
			return task.completed;
		}
		if (filter === "Active") {
			return !task.completed;
		}
		return true;
	};
};

export default LoadMore;
