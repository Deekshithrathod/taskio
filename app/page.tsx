import DisplayTasks from "@/components/DisplayTasks";
import AddTask from "@/components/ui/add-task";
import DeleteAll from "@/components/ui/delete-all";

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
			<AddTask />
			<DeleteAll />

			<DisplayTasks limit={limit} offset={offset} filter={filter} />
		</>
	);
}
