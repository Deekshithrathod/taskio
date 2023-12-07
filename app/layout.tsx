import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/ui/max-w-wrapper";
import NavBar from "@/components/NavBar";

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
					"relative px-4 sm:px-6 lg:px-8"
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<MaxWidthWrapper>
						<div className="pb-12">
							<Header />
							<NavBar />
							{children}
						</div>
					</MaxWidthWrapper>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
