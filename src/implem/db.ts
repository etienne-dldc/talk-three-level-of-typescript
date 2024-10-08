import { BetterSqliteDatabase } from "@dldc/zendb-better-sqlite3";
import Database from "better-sqlite3";

// create @db/sqlite database
const sqlDb = new Database(":memory:");
// pass it to the adapter
export const db = BetterSqliteDatabase.create(sqlDb);
