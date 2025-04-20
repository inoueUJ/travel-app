"use client";

import { cn } from "@/lib/utils";
import { Globe, Home, Search, User, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ name: "ホーム", href: "/", icon: Home },
	{ name: "検索", href: "/search", icon: Search },
	{ name: "翻訳", href: "/translate", icon: Globe },
	{ name: "予算", href: "/budget", icon: Wallet },
	{ name: "設定", href: "/settings", icon: User },
];

export function BottomNavigation() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 pb-safe">
			<div className="flex justify-around items-center h-16">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					const IconComponent = item.icon;

					return (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"flex flex-col items-center justify-center w-full h-full",
								isActive ? "text-primary" : "text-gray-500",
							)}
						>
							<div
								className={cn(
									"flex items-center justify-center rounded-full w-10 h-10",
									isActive ? "bg-primary-light" : "",
								)}
							>
								<IconComponent className="w-5 h-5" />
							</div>
							<span className="text-tiny mt-1">{item.name}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
