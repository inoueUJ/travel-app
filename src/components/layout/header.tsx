// src/components/layout/header.tsx
import { UserMenu } from "@/components/auth/user-menu";

interface HeaderProps {
	title: string;
}

export function Header({ title }: HeaderProps) {
	return (
		<header className="sticky top-0 z-10 bg-white border-b border-gray-200 pt-safe">
			<div className="flex items-center justify-between px-4 py-4">
				<h1 className="text-xl font-bold">{title}</h1>
				<UserMenu />
			</div>
		</header>
	);
}
