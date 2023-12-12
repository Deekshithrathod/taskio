import { Raleway } from "next/font/google";
import Logo from "./ui/logo";
import { ModeToggle } from "./ModeToggle";

const raleway = Raleway({ subsets: ["latin"], weight: "700" });

const Header = () => {
	return (
		<div className="w-full relative">
			<div
				className={`${raleway.className} font-bold text-4xl text-[#333] letter-spacing-[-0.10125rem] flex gap-3 justify-center pt-8 dark:text-white`}>
				<Logo />
				#taskio
			</div>
			<div className="absolute top-8 right-0 shadow-lg shadow-amber-50">
				<ModeToggle />
			</div>
		</div>
	);
};
export default Header;
