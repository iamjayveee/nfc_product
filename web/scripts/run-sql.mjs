// Runs one SQL file against DATABASE_URL. Usage: node scripts/run-sql.mjs <file.sql>
import { readFile } from "node:fs/promises";
import postgres from "postgres";

const [file] = process.argv.slice(2);
if (!file) throw new Error("usage: node scripts/run-sql.mjs <file.sql>");
const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

const sql = postgres(url, { prepare: false, max: 1, onnotice: () => {} });
try {
  await sql.unsafe(await readFile(file, "utf8"));
  console.log(`ran ${file}`);
} finally {
  await sql.end();
}
