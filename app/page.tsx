import DisplayTasks from "@/components/DisplayTasks";
import TaskListSkeleton from "@/components/ui/skeletons/TaskListSkeleton";
import { Suspense } from "react";

export default function Page({
	searchParams,
}: {
	searchParams?: {
		filter?: string;
	};
}) {
	const filter = searchParams?.filter || "All";

	return (
		<>
			<Suspense fallback={<TaskListSkeleton />}>
				<DisplayTasks filter={filter} />
			</Suspense>
		</>
	);
}
