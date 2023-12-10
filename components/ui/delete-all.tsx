"use client";

import { deleteAllCompletedTasks } from "@/lib/actions";
import { TrashIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const DeleteAll = () => {
	const searchParams = useSearchParams();

	return (
		searchParams.get("filter") === "Completed" && (
			<div className="flex justify-end gap-5 mt-5 mx-6 sm:mx-0">
				<button
					className="bg-rose-500 rounded py-3 px-7 text-white text-sm font-semibold flex gap-2 items-center lowercase"
					onClick={() => {
						// TODO:started DELETE ALL (update UI)
						deleteAllCompletedTasks();
					}}>
					<TrashIcon className="h-4 w-4" />
					Delete All
				</button>
			</div>
		)
	);
};
export default DeleteAll;
