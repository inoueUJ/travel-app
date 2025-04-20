// src/components/trip/new-trip-button.tsx

import { Plus } from "lucide-react";
import Link from "next/link";

export function NewTripButton() {
	return (
		<Link
			href="/trips/new"
			className="flex items-center justify-center w-full p-3 rounded-button bg-travel-accent/10 text-travel-accent font-medium border border-travel-accent/20"
		>
			<Plus className="w-4 h-4 mr-2" />
			<span>新しい旅行を計画する</span>
		</Link>
	);
}
