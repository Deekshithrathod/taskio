import MaxWidthWrapper from "./max-w-wrapper";

const LoadMore = () => {
	return (
		<MaxWidthWrapper>
			<div className="mt-6 mb-8 mx-auto sm:mt-8 px-6 py-2 text-center bg-slate-200 rounded w-fit">
				No tasks found
			</div>
		</MaxWidthWrapper>
	);
};
export default LoadMore;
