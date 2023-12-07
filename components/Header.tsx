import { Raleway } from "next/font/google";
import Logo from "./ui/logo";

const raleway = Raleway({ subsets: ["latin"], weight: "700" });

const Header = () => {
	return (
		<div
			className={`${raleway.className} font-bold text-4xl text-[#333] letter-spacing-[-0.10125rem] flex gap-3 justify-center pt-8`}>
			<Logo />
			#taskio
		</div>
	);
};
export default Header;
