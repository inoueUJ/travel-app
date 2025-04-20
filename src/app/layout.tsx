// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "@/components/auth/providers";

export const metadata: Metadata = {
	title: "旅のしおり",
	description: "あなたの旅行をより快適に",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<body className="flex min-h-svh flex-col" suppressHydrationWarning>
				<NextAuthProvider>
					<main className="flex flex-1 flex-col">{children}</main>
				</NextAuthProvider>
			</body>
		</html>
	);
}
