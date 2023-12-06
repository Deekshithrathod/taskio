import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";

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
					fontSans.variable
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
