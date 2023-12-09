const Checkbox = ({
	id,
	completed,
	handleChange,
}: {
	id: number;
	completed: boolean;
	handleChange: () => void;
}) => {
	return (
		<>
			<input
				type="checkbox"
				name="checkbox"
				id={`id-${id}`}
				checked={completed}
				onChange={() => {
					handleChange();
				}}
				className="w-4 h-4 sm:w-5 sm:h-5 mt-1 relative peer appearance-none rounded border border-zinc-500 checked:bg-blue-500 checked:border-0 shrink-0"
			/>
			<svg
				className="absolute w-4 h-4 sm:w-5 sm:h-5 mt-1 hidden peer-checked:block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#FFF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round">
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
		</>
	);
};
export default Checkbox;
