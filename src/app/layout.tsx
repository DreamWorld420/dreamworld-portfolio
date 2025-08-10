import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
	title: "Kasra Bozorgmehr - Portfolio",
	description: "Created with love",
};

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-roboto",
});

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-playfair",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${playfairDisplay.variable} font-sans`}
			>
				{children}
			</body>
		</html>
	);
}
