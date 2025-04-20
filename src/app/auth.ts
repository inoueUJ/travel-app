import { D1Adapter } from "@auth/d1-adapter";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth(async () => {
	// Cloudflareコンテキストを取得
	const { env } = await getCloudflareContext({ async: true });

	return {
		adapter: D1Adapter(env.DB), // D1データベースをアダプターとして使用
		providers: [
			Google({
				clientId: env.GOOGLE_CLIENT_ID,
				clientSecret: env.GOOGLE_CLIENT_SECRET,
			}),
			// 他の認証プロバイダーを追加可能
		],

		// 明示的にシークレットを設定
		secret: env.AUTH_SECRET,

		// セッション設定
		session: { strategy: "jwt" }, // Cloudflare環境では"jwt"が推奨

		// カスタムページ設定
		pages: {
			signIn: "/signin",
		},
	};
});
