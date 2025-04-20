"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

// クライアントサイドでのセッション取得サンプル
export default function ClientHomePage() {
  // クライアントサイドでセッション情報を取得
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <header className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">旅のしおり (クライアント)</h1>
        <div>
          {loading ? (
            <span>Loading...</span>
          ) : session ? (
            <div className="flex items-center gap-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || "ユーザー"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span>{session.user?.name}</span>
              <Link
                href="/api/auth/signout"
                className="ml-4 rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300"
              >
                ログアウト
              </Link>
            </div>
          ) : (
            <Link
              href="/signin"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              ログイン
            </Link>
          )}
        </div>
      </header>

      <main className="w-full max-w-4xl flex-1 text-center">
        <h2 className="text-xl mb-4">クライアントサイドのセッション情報</h2>
        <pre className="bg-gray-100 p-4 rounded text-left overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </main>
    </div>
  );
}
