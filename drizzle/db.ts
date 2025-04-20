import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// 必要なときに呼び出す関数としてラップする
export function getDB() {
  const { env } = getCloudflareContext();
  return drizzle(env.DB, { schema });
}