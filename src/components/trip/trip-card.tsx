// src/components/trip/trip-card.tsx
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import Link from "next/link";

interface TripCardProps {
	id: string;
	title: string;
	startDate: string;
	endDate: string;
	nextEvent?: {
		title: string;
		time: string;
		timeFromNow: string;
	};
	color?: "blue" | "teal";
	className?: string;
}

export function TripCard({
	id,
	title,
	startDate,
	endDate,
	nextEvent,
	color = "blue",
	className,
}: TripCardProps) {
	const colorStyles = {
		blue: "bg-primary",
		teal: "bg-secondary",
	};

	return (
		<Link href={`/trips/${id}`}>
			<div
				className={cn(
					"rounded-card overflow-hidden shadow-sm border border-gray-100",
					className,
				)}
			>
				{/* カードヘッダー */}
				<div className={cn("p-4 text-white", colorStyles[color])}>
					<h3 className="font-bold text-heading-sm">{title}</h3>
					<div className="flex items-center mt-1 text-white/90 text-caption">
						<CalendarIcon className="w-3 h-3 mr-1" />
						<span>
							{startDate}〜{endDate}
						</span>
					</div>
				</div>

				{/* カード情報エリア */}
				<div className="p-4 bg-white">
					{nextEvent ? (
						<>
							<div className="text-caption text-text-secondary">
								次のイベント: {nextEvent.title} {nextEvent.time}
							</div>
							<div className="flex items-center mt-1 text-caption text-text-tertiary">
								<Clock className="w-3 h-3 mr-1" />
								<span>{nextEvent.timeFromNow}</span>
							</div>
						</>
					) : (
						<div className="text-caption text-text-secondary">
							予定されたイベントはありません
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
