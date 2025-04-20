import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Include all files where Tailwind classes might be used
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// Enable dark mode using class strategy (better for server components)
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Your travel app color scheme from design
				primary: {
					DEFAULT: "#3A8DFF", // メインの青色
					light: "#F2F8FF",
					dark: "#2A6DBF",
				},
				secondary: {
					DEFAULT: "#17C3B2", // ティール
					light: "#E1FFFC",
				},
				travel: {
					blue: "#4FC3F7", // 翻訳機能用
					green: "#27AE60", // 予算管理用
					accent: "#FF5A5F", // アクセントカラー（新規作成ボタンなど）
				},
				// Gray scale
				background: "#F5F7FA",
				text: {
					primary: "#333333",
					secondary: "#666666",
					tertiary: "#888888",
				},
			},
			borderRadius: {
				card: "10px",
				button: "25px",
				input: "8px",
			},
			spacing: {
				// 共通の余白設定
				"card-padding": "15px",
				"section-gap": "20px",
			},
			fontFamily: {
				sans: ["Arial", "sans-serif"],
			},
			fontSize: {
				// フォントサイズ規定
				"heading-lg": "24px", // 大見出し
				"heading-md": "20px", // 中見出し
				"heading-sm": "16px", // 小見出し
				body: "14px", // 本文
				caption: "12px", // 補足テキスト
				tiny: "10px", // 最小テキスト
			},
			boxShadow: {
				card: "0 2px 4px rgba(0, 0, 0, 0.05)",
			},
			// 追加: オフライン対応のための設定
			screens: {
				xs: "480px",
				// Tailwindのデフォルト設定を維持
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			// インターネット接続状況に応じたスタイル
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
				},
			},
		},
	},
	plugins: [
		// プラグインが必要になったら追加
		// require('@tailwindcss/forms'), // フォーム用スタイル
		// require('@tailwindcss/typography'), // 長文テキスト用スタイル
	],
	// 追加: ファイルサイズ最適化のためのセーフリスト（必要最小限に）
};

export default config;
