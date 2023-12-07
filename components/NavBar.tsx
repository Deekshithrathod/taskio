"use client";
import { CheckCircleIcon, HomeIcon, ListTodo } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const NavBar = () => {
	const [selectedId, setSelectedId] = useState(1);
	const list = [
		{
			id: 1,
			text: "All",
			icon: <HomeIcon />,
		},
		{
			id: 2,
			text: "Active",
			icon: <ListTodo />,
		},
		{
			id: 3,
			text: "Completed",
			icon: <CheckCircleIcon />,
		},
	];

	return (
		<>
			<nav className="mt-12 flex justify-center sm:justify-around gap-8 w-full">
				{list.map((item) => (
					<>
						{/* <div>{item.icon}</div> */}
						<div key={item.id} onClick={() => setSelectedId(item.id)}>
							<div
								className={clsx(
									"p-4 sm:px-8 sm:py-1 text-center sm:bg-transparent sm:text-black rounded-[50%]",
									{
										"bg-blue-400 text-white": selectedId === item.id,
										"text-black bg-slate-100": selectedId !== item.id,
									}
								)}>
								<span className="sm:hidden">{item.icon}</span>
								<span className="hidden sm:block">{item.text}</span>
								{/* Secret underline div */}
							</div>
							{item.id === selectedId && (
								<div className="sm:h-1 bg-blue-500 sm:rounded-tl sm:rounded-tr"></div>
							)}
						</div>
					</>
				))}
			</nav>
			<div className="mt-4 w-[60%] mx-auto sm:mt-0 sm:w-full h-px border rounded border-stone-300"></div>
		</>
	);
};
export default NavBar;
