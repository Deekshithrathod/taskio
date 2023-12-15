"use client";
import { ArrowDownToDot, ListChecks, ListTodo, Replace } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavBar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [selectedId, setSelectedId] = useState(0);
	useEffect(() => {
		const params = new URLSearchParams(searchParams);
		params.set("filter", String(list[selectedId].text));
		router.replace(`${pathname}?${params.toString()}`);
	}, [selectedId]);

	const list = [
		{
			id: 0,
			text: "All",
			icon: <ListTodo />,
		},
		{
			id: 1,
			text: "Active",
			icon: <ArrowDownToDot />,
		},
		{
			id: 2,
			text: "Completed",
			icon: <ListChecks />,
		},
	];

	return (
		<>
			<nav className="mt-12 flex justify-center sm:justify-around gap-8 w-full">
				{list.map((item) => (
					<div key={item.id} onClick={() => setSelectedId(item.id)}>
						<div
							className={clsx(
								"p-4 sm:px-8 sm:py-1 text-center sm:bg-transparent text-black rounded-[50%] cursor-pointer dark:text-white",
								{
									"bg-blue-200": selectedId === item.id,
								}
							)}>
							<span className="sm:hidden">{item.icon}</span>
							<span className="hidden sm:block">{item.text}</span>
						</div>
						{/* Secret underline div */}
						{item.id === selectedId && (
							<div
								key={item.id + 1}
								className="sm:h-1 bg-blue-500 sm:rounded-tl sm:rounded-tr cursor-pointer"></div>
						)}
					</div>
				))}
			</nav>
			<div className="mt-4 w-[60%] mx-auto sm:mt-0 sm:w-full h-px border rounded border-stone-300"></div>
		</>
	);
};
export default NavBar;
