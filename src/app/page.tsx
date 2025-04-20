import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { Header } from "@/components/layout/header";
import { Protected } from "@/components/layout/protected";
import { NewTripButton } from "@/components/trip/new-trip-button";
import { TripCard } from "@/components/trip/trip-card";
import { auth } from "./auth";

// モックデータ（実際にはデータベースから取得）
const mockTrips = [
	{
		id: "trip1",
		title: "トルコへの旅",
		startDate: "2025年5月10日",
		endDate: "2025年5月20日",
		nextEvent: {
			title: "イスタンブール観光",
			time: "10:00",
			timeFromNow: "74日後",
		},
		color: "blue" as const,
	},
	{
		id: "trip2",
		title: "沖縄ビーチリゾート",
		startDate: "2025年7月20日",
		endDate: "2025年7月25日",
		nextEvent: {
			title: "パスポート確認",
			time: "",
			timeFromNow: "残り 120日",
		},
		color: "teal" as const,
	},
];

export default async function Home() {
	const session = await auth();

	return (
		<Protected>
			<div className="flex flex-col min-h-svh pb-16">
				<Header title="旅のしおり" />

				<div className="flex-1 px-4 py-4 space-y-4">
					{/* 旅行カード一覧 */}
					<div className="space-y-4">
						{mockTrips.map((trip) => (
							<TripCard key={trip.id} {...trip} />
						))}
					</div>

					{/* 新規作成ボタン */}
					<NewTripButton />
				</div>

				<BottomNavigation />
			</div>
		</Protected>
	);
}
