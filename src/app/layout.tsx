import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className}`}>{children}</body>
		</html>
	);
}
