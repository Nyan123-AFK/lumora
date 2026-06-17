import 'dotenv/config';
import { Pool, type QueryResultRow } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const globalForPg = globalThis as unknown as { pgPool?: Pool };

export const db =
  globalForPg.pgPool ??
  new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30_000,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPg.pgPool = db;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  const result = await db.query<T>(text, params);
  return result.rows;
}
