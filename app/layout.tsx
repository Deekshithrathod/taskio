import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/ui/max-w-wrapper";
import NavBar from "@/components/NavBar";
import AddTask from "@/components/ui/add-task";
import DeleteAll from "@/components/ui/delete-all";
import "regenerator-runtime";
import dynamic from "next/dynamic";

const DictaphoneDynamic = dynamic(() => import("@/components/ui/dictaphone"), {
	ssr: false,
});

export const metadata: Metadata = {
	title: "Taskio",
	description: "Clear Goals, Simple Checklist Magic.",
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-montserrat antialiased",
					fontSans.variable,
					"relative"
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<MaxWidthWrapper>
						<div className="pb-12 px-4 sm:px-10">
							<Header />
							<NavBar />
							<DictaphoneDynamic />
							{/* <AddTask /> */}
							{/* <DeleteAll />
							{children} */}
						</div>
					</MaxWidthWrapper>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
