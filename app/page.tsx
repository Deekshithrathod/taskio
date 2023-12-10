import DisplayTasks from "@/components/DisplayTasks";
import TaskListSkeleton from "@/components/ui/skeletons/TaskListSkeleton";
import { Suspense } from "react";

export default function Page({
	searchParams,
}: {
	searchParams?: {
		limit?: string;
		offset?: string;
		filter?: string;
	};
}) {
	const limit = Number(searchParams?.limit) || 50;
	const offset = Number(searchParams?.offset) || 0;
	const filter = searchParams?.filter || "All";
	return (
		<>
			<DisplayTasks limit={limit} offset={offset} filter={filter} />
		</>
	);
}
