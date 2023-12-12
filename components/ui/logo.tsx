import Image from "next/image";

const Logo = () => {
	return (
		<Image
			src="/logo.png"
			alt="logo"
			width={40}
			height={40}
			className="dark:invert"
		/>
	);
};
export default Logo;
